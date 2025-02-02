import { writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type {
  ClassDeclaration,
  ExportDeclaration,
  FunctionDeclaration,
  JSDoc,
  SourceFile,
  Statement,
  VariableStatement,
  ts,
} from 'ts-morph';
import { Node, Project, SyntaxKind } from 'ts-morph';
import type { ApiDocument, ApiDocuments, JsDocParam } from '../site/src/api.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rootPath = resolve(__dirname, '../');
const srcPath = resolve(rootPath, 'src');
const apiDataPath = resolve(rootPath, 'site/src/api.json');
const project = new Project({
  skipAddingFilesFromTsConfig: true,
  tsConfigFilePath: resolve(rootPath, 'tsconfig.json'),
});

project.addSourceFilesAtPaths([
  join(rootPath, 'src/**/*.ts'),
  join(rootPath, '!**/*.d.ts'),
  join(rootPath, '!**/*.spec.ts'),
]);

const rootFile = project.getSourceFile('src/index.ts');

const apiDocuments: ApiDocuments = {
  all: [],
  byTag: {},
  byModule: {},
};

if (rootFile) {
  getApiDocuments(rootFile, '');
  writeFileSync(apiDataPath, JSON.stringify(apiDocuments, null, 2));
}

function getApiDocuments(file: SourceFile, moduleNameShort: string) {
  for (const node of file.getStatements()) {
    if (Node.isExportDeclaration(node)) {
      visitExportDeclaration(node);
    } else if (isExported(node)) {
      const [name, jsDocs] = visitNode(node);
      createApiDocument(name, file, moduleNameShort, jsDocs);
    }
  }

  function visitExportDeclaration(node: ExportDeclaration): void {
    const exportedNamespace = node.isNamespaceExport()
      ? node.getNamespaceExport()?.getName()
      : '';
    const moduleFile = node.getModuleSpecifierSourceFile();
    if (!moduleFile) {
      throw new Error('Module file not found');
    }
    getApiDocuments(moduleFile, exportedNamespace || moduleNameShort);
  }

  function visitNode(node: Statement<ts.Statement>): [string, JSDoc[]] {
    if (Node.isTypeAliasDeclaration(node))
      return [node.getName(), node.getJsDocs()];
    if (Node.isVariableStatement(node))
      return [getVariableStatementName(node), node.getJsDocs()];
    if (Node.isModuleDeclaration(node))
      return [node.getName(), node.getJsDocs()];
    if (Node.isClassDeclaration(node))
      return [getClassDeclarationName(node), node.getJsDocs()];
    if (Node.isFunctionDeclaration(node))
      return [getFunctionDeclarationName(node), node.getJsDocs()];
    throw new Error(
      `Unsupported node type: ${node.getKindName()} in ${file.getFilePath()}`,
    );
  }

  function getFunctionDeclarationName(node: FunctionDeclaration): string {
    const fnName = node.getName();
    if (!fnName) {
      throw new Error('Function name not found');
    }
    return fnName;
  }

  function getClassDeclarationName(node: ClassDeclaration): string {
    const className = node.getName();
    if (!className) {
      throw new Error('Class name not found');
    }
    return className;
  }

  function getVariableStatementName(node: VariableStatement): string {
    const declaration = node.getFirstDescendantByKind(
      SyntaxKind.VariableDeclaration,
    );
    if (!declaration) {
      throw new Error('Variable declaration not found');
    }
    return declaration.getName();
  }
}

function createApiDocument(
  name: string,
  file: SourceFile,
  moduleNameShort: string,
  jsDocs: JSDoc[],
): ApiDocument {
  const moduleName = getModuleName(file);
  const kebabName = toKebabName(name);
  const api = {
    filePath: getFilePath(file),
    moduleName,
    moduleNameShort,
    name,
    namespacedName: `${moduleNameShort}.${name}`,
    slug: `${moduleName}/${kebabName}`.toLowerCase(),
    title: `${moduleName}.${name}`,
    '@description': getJsDocDescription(jsDocs[0]),
    '@param': getJsDocParam(jsDocs[0]),
    '@returns': getJsDocReturns(jsDocs[0]),
    '@see': getJsDocSee(jsDocs[0]),
    '@tags': getJsDocTags(jsDocs[0]),
  };

  if (!api['@description']) {
    console.log('Skipped', api.slug, 'in', file.getFilePath());
    return api;
  }

  apiDocuments.all.push(api);
  for (const tag of api['@tags']) {
    if (!apiDocuments.byTag[tag]) {
      apiDocuments.byTag[tag] = [];
    }
    apiDocuments.byTag[tag].push(api);
  }
  if (!apiDocuments.byModule[moduleName]) {
    apiDocuments.byModule[moduleName] = [];
  }
  apiDocuments.byModule[moduleName].push(api);
  return api;
}

function getJsDocParam(jsDoc?: JSDoc): JsDocParam[] {
  if (!jsDoc) return [];
  return getJsDocTagTextsByName('param', jsDoc).map(tagText => {
    const [name, ...description] = tagText.split(' ');
    if (!name) throw new Error('Param name not found');
    return {
      name,
      description: description.join(' '),
    };
  });
}

function getJsDocReturns(jsDoc?: JSDoc): string {
  if (!jsDoc) return '';
  return getJsDocTagTextByName('returns', jsDoc);
}

function getJsDocSee(jsDoc?: JSDoc): string[] {
  if (!jsDoc) return [];
  return getJsDocTagTextsByName('see', jsDoc);
}

function getJsDocTags(jsDoc?: JSDoc): string[] {
  if (!jsDoc) return [];
  return getJsDocTagTextsByName('tags', jsDoc)
    .flatMap(tagText =>
      tagText
        .split(/[\s*,]/g)
        .filter(Boolean)
        .map(tag => tag.split('-').map(toFirstUp).join(' ')),
    )
    .sort();
}

function toFirstUp(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function toKebabName(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function getJsDocTagTextByName(name: string, jsDoc: JSDoc): string {
  return getJsDocTagTextsByName(name, jsDoc)[0] || '';
}

function getJsDocTagTextsByName(name: string, jsDoc: JSDoc): string[] {
  const all: string[] = [];
  for (const jsDocTag of jsDoc.getTags()) {
    if (jsDocTag.getTagName() === name) {
      all.push(
        withoutJsDocCommentIndentation(jsDocTag.getText())
          .replace(`@${name} `, '')
          .trim(),
      );
    }
  }
  return all;
}

function getJsDocDescription(jsDoc?: JSDoc): string {
  if (!jsDoc) return '';
  return withoutJsDocCommentIndentation(jsDoc.getDescription().trim());
}

function withoutJsDocCommentIndentation(jsDocComment: string): string {
  return jsDocComment.replace(/^ \* /gm, '');
}

function isExported(node: Node) {
  return (
    Node.isModifierable(node) &&
    node.getModifiers().some(mod => mod.getText() === 'export')
  );
}

function getModuleName(file: SourceFile): string {
  const lowerName = getFilePath(file).split('/')[0];
  if (!lowerName) throw new Error('Module name not found');
  return toFirstUp(lowerName);
}

function getFilePath(file: SourceFile): string {
  return file.getFilePath().replace(`${srcPath}/`, '').replace('.ts', '');
}
