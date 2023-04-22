import { mkdirSync, writeFileSync } from 'fs';
import { basename, dirname, join, resolve } from 'path';
import type {
  ClassDeclaration,
  FunctionDeclaration,
  JSDoc,
  ModifierableNode,
  TypeAliasDeclaration,
  VariableStatement,
} from 'ts-morph';
import { Project, SyntaxKind } from 'ts-morph';

interface Doc {
  docsPath: string;
  contents: string;
  title: string;
}

interface ApiData {
  docsPath: string;
  filePath: string;
  id: string;
  jsDoc: JSDoc;
  title: string;
}

const root = resolve(__dirname, '../..');
const srcDir = resolve(root, 'src');
const docsDir = resolve(root, 'site/docs/api');
const project = new Project({
  skipAddingFilesFromTsConfig: true,
  tsConfigFilePath: resolve(root, 'tsconfig.json'),
});

project.addSourceFilesAtPaths([
  join(root, 'src/**/*.ts'),
  join(root, '!**/*.d.ts'),
  join(root, '!**/*.spec.ts'),
]);

// export const
const variableStatements = project
  .getSourceFiles()
  .flatMap((file) => file.getDescendantsOfKind(SyntaxKind.VariableStatement))
  .map((node): Doc => {
    const data = getDataFromVariableStatement(node);
    if (!data) return;
    const { docsPath, id, jsDoc, title } = data;
    const desc = jsDoc.getDescription();
    const related = getRelatedLinks(jsDoc);
    const contents = getContents({ desc, docsPath, id, jsDoc, related, title });
    return { docsPath, contents, title };
  })
  .filter(Boolean);

// export class
const classDeclarations = project
  .getSourceFiles()
  .flatMap((file) => file.getDescendantsOfKind(SyntaxKind.ClassDeclaration))
  .map((node): Doc => {
    const data = getDataFromClassDeclaration(node);
    if (!data) return;
    const { docsPath, id, jsDoc, title } = data;
    const desc = jsDoc.getDescription();
    const related = getRelatedLinks(jsDoc);
    const contents = getContents({ desc, docsPath, id, jsDoc, related, title });
    return { docsPath, contents, title };
  })
  .filter(Boolean);

// export function
const functionDeclarations = project
  .getSourceFiles()
  .flatMap((file) => file.getDescendantsOfKind(SyntaxKind.FunctionDeclaration))
  .map((node): Doc => {
    const data = getDataFromFunctionDeclaration(node);
    if (!data) return;
    const { docsPath, id, jsDoc, title } = data;
    const desc = jsDoc.getDescription();
    const related = getRelatedLinks(jsDoc);
    const contents = getContents({ desc, docsPath, id, jsDoc, related, title });
    return { docsPath, contents, title };
  })
  .filter(Boolean);

// export type
const typeAliasDeclarations = project
  .getSourceFiles()
  .flatMap((file) => file.getDescendantsOfKind(SyntaxKind.TypeAliasDeclaration))
  .map((node): Doc => {
    const data = getDataFromTypeAliasDeclaration(node);
    if (!data) return;
    const { docsPath, id, jsDoc, title } = data;
    const desc = jsDoc.getDescription();
    const related = getRelatedLinks(jsDoc);
    const contents = getContents({ desc, docsPath, id, jsDoc, related, title });
    return { docsPath, contents, title };
  })
  .filter(Boolean);

const all = [
  ...classDeclarations,
  ...functionDeclarations,
  ...variableStatements,
  ...typeAliasDeclarations,
];

const byDocsPath: Record<string, Doc[]> = groupBy('docsPath')(all);

Object.entries(byDocsPath).forEach(([docsPath, docs]) => {
  mkdirSync(dirname(docsPath), { recursive: true });
  if (docs.length === 1) {
    const contents = docs[0].contents;
    writeFileSync(docsPath, contents);
  } else {
    const contents = docs
      .map(
        ({ contents, title }) =>
          `## ${title}\n\n${contents
            .replace(/^## /gm, '### ')
            .replace(/^(id|title): .+/gm, '')
            .replace(/^---$/gm, '')}`,
      )
      .join('\n');
    writeFileSync(docsPath, contents);
  }
});

// ====

function groupBy(key) {
  return function (array) {
    return array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  };
}

function getDataFromClassDeclaration(
  node: ClassDeclaration,
): ApiData | undefined {
  if (!isExported(node)) return;

  const filePath = node.getSourceFile().getFilePath();
  const docsPath = filePath.replace(srcDir, docsDir).replace('.ts', '.mdx');
  const id = basename(filePath).replace('.ts', '');
  const [jsDoc] = node.getJsDocs();
  const title = node.getName();
  // const id = baseId === 'index' ? title : baseId;

  if (!jsDoc) return;
  if (isIgnored(jsDoc)) return;

  return {
    docsPath,
    filePath,
    id,
    jsDoc,
    title,
  };
}

function getDataFromFunctionDeclaration(
  node: FunctionDeclaration,
): ApiData | undefined {
  if (!isExported(node)) return;

  const filePath = node.getSourceFile().getFilePath();
  const docsPath = filePath.replace(srcDir, docsDir).replace('.ts', '.mdx');
  const id = basename(filePath).replace('.ts', '');
  const [jsDoc] = node.getJsDocs();
  const title = node.getName();
  // const id = baseId === 'index' ? title : baseId;

  if (!jsDoc) return;
  if (isIgnored(jsDoc)) return;

  return {
    docsPath,
    filePath,
    id,
    jsDoc,
    title,
  };
}

function getDataFromVariableStatement(
  node: VariableStatement,
): ApiData | undefined {
  if (!isExported(node)) return;

  const filePath = node.getSourceFile().getFilePath();
  const title = node
    .getFirstDescendantByKind(SyntaxKind.VariableDeclaration)
    ?.getFirstDescendantByKind(SyntaxKind.Identifier)
    ?.getText();
  const docsPath = filePath.replace(srcDir, docsDir).replace('.ts', '.mdx');
  const [jsDoc] = node.getJsDocs();
  const id = basename(filePath).replace('.ts', '');
  // const id = baseId === 'index' ? title : baseId;

  if (!jsDoc) return;
  if (isIgnored(jsDoc)) return;

  return {
    docsPath,
    filePath,
    id,
    jsDoc,
    title,
  };
}

function getDataFromTypeAliasDeclaration(
  node: TypeAliasDeclaration,
): ApiData | undefined {
  if (!isExported(node)) return;

  const filePath = node.getSourceFile().getFilePath();
  const docsPath = filePath.replace(srcDir, docsDir).replace('.ts', '.mdx');
  const id = basename(filePath).replace('.ts', '');
  const [jsDoc] = node.getJsDocs();
  const title = node.getName();
  // const id = baseId === 'index' ? title : baseId;

  if (!jsDoc) return;
  if (isIgnored(jsDoc)) return;

  return {
    docsPath,
    filePath,
    id,
    jsDoc,
    title,
  };
}

function isExported(node: ModifierableNode) {
  return node.getModifiers().some((mod) => mod.getText() === 'export');
}

function isIgnored(jsDoc: JSDoc) {
  return jsDoc.getTags().some((tag) => tag.getTagName() === 'ignore');
}

function getRelatedLinks(jsDoc: JSDoc) {
  const links = jsDoc
    .getTags()
    .filter((tag) => tag.getTagName() === 'see')
    .map((tag) =>
      tag
        .getText()
        .replace('{https} ', 'https')
        .replace('@see ', '')
        .replace(/[ *]/g, '')
        .trim(),
    )
    .map((url) => `- [${url}](${url})`)
    .join('\n');
  return links
    ? `
## See also

${links}
`
    : '';
}

function getContents({
  docsPath,
  id,
  jsDoc,
  title,
  desc,
  related,
}: {
  docsPath: string;
  id: string;
  jsDoc: JSDoc;
  title: string;
  desc: string;
  related: string;
}) {
  const tagsList = getTags(jsDoc);
  const idMeta = `id: ${id}`;
  const titleMeta = `title: ${title}`;
  const tagsMeta = tagsList.length ? `tags: [${tagsList.join(', ')}]` : '';
  const meta = [idMeta, titleMeta, tagsMeta].filter(Boolean).join('\n');
  const contents = `
---
${meta}
---

${desc}

${related}

`
    .trimStart()
    .replace(/\n{3,}/g, '\n\n')
    .replace(/:::caution /g, ':::caution\n\n')
    .replace(/:::danger /g, ':::danger\n\n')
    .replace(/:::info /g, ':::info\n\n')
    .replace(/:::note /g, ':::note\n\n')
    .replace(/:::tip /g, ':::tip\n\n')
    .replace(/ :::/g, '\n\n:::\n\n');

  return autoLink(contents, docsPath);
}

function getTags(jsDoc: JSDoc): string[] {
  return Array.from(
    new Set(
      jsDoc
        .getTags()
        .filter((tag) => tag.getTagName() === 'tags')
        .flatMap((tag) =>
          tag
            .getText()
            .replace('@tags ', '')
            .split(/[\s*,]/g)
            .filter(Boolean)
            .sort(),
        ),
    ),
  );
}

/** Link to the first mention of something from the API */
function autoLink(contents: string, docsPath: string): string {
  const moduleName = getModule(docsPath);
  if (moduleName === 'option') return autoLinkOption(contents, docsPath);
  if (moduleName === 'result') return autoLinkResult(contents, docsPath);
  return contents;
}

function autoLinkOption(contents: string, docsPath: string): string {
  const optionPath = '/tightrope/api/option';
  const basePath = `/tightrope/api/${getModule(docsPath)}`;

  return (
    contents
      .replace('`andThen`', `[\`andThen\`](${optionPath}/and-then)`)
      .replace('`and`', `[\`and\`](${optionPath}/and)`)
      .replace('`expect`', `[\`expect\`](${optionPath}/expect)`)
      .replace('`filter`', `[\`filter\`](${optionPath}/filter)`)
      .replace('`flatten`', `[\`flatten\`](${optionPath}/flatten)`)
      .replace('`isNone`', `[\`isNone\`](${optionPath}/is-none)`)
      .replace('`isSome`', `[\`isSome\`](${optionPath}/is-some)`)

      // link to the map function from the same package
      .replace('`map`', `[\`map\`](${basePath}/map)`)

      .replace('`mapOrElse`', `[\`mapOrElse\`](${optionPath}/map-or-else)`)
      .replace('`mapOr`', `[\`mapOr\`](${optionPath}/map-or)`)
      .replace('`none`', `[\`none\`](${optionPath})`)
      .replace('`okOrElse`', `[\`okOrElse\`](${optionPath}/ok-or-else)`)
      .replace('`okOr`', `[\`okOr\`](${optionPath}/ok-or)`)
      .replace('`Option`', `[\`Option\`](${optionPath})`)
      .replace('`orElse`', `[\`orElse\`](${optionPath}/or-else)`)
      .replace('`or`', `[\`or\`](${optionPath}/or)`)
      .replace('`Some`', `[\`Some\`](${optionPath})`)
      .replace(
        '`unwrapOrDefault`',
        `[\`unwrapOrDefault\`](${optionPath}/unwrap-or-default)`,
      )
      .replace(
        '`unwrapOrElse`',
        `[\`unwrapOrElse\`](${optionPath}/unwrap-or-else)`,
      )
      .replace('`unwrapOr`', `[\`unwrapOr\`](${optionPath}/unwrap-or)`)
      .replace('`unwrap`', `[\`unwrap\`](${optionPath}/unwrap)`)
  );
}

function autoLinkResult(contents: string, docsPath: string): string {
  const resultPath = '/tightrope/api/result';
  const basePath = `/tightrope/api/${getModule(docsPath)}`;

  return (
    contents
      .replace('`all`', `[\`all\`](${resultPath}/all)`)
      .replace('`and`', `[\`and\`](${resultPath}/and)`)
      .replace('`andThen`', `[\`andThen\`](${resultPath}/and-then)`)
      .replace('`Err`', `[\`Err\`](${resultPath})`)
      .replace('`expect`', `[\`expect\`](${resultPath}/expect)`)
      .replace('`expectErr`', `[\`expectErr\`](${resultPath}/expect-err)`)
      .replace('`flatten`', `[\`flatten\`](${resultPath}/flatten)`)
      .replace('`Err.create`', `[\`Err.create\`](${resultPath})`)
      .replace('`Ok.create`', `[\`Ok.create\`](${resultPath})`)
      .replace('`fromTry`', `[\`fromTry\`](${resultPath}/from-try)`)
      .replace('`isErr`', `[\`isErr\`](${resultPath}/is-err)`)
      .replace('`isOk`', `[\`isOk\`](${resultPath}/is-ok)`)
      .replace('`isResult`', `[\`isResult\`](${resultPath}/is-result)`)

      // link to the map function from the same package
      .replace('`map`', `[\`map\`](${basePath}/map)`)

      .replace('`mapErr`', `[\`mapErr\`](${resultPath}/map-err)`)
      .replace('`mapOr`', `[\`mapOr\`](${resultPath}/map-or)`)
      .replace('`mapOrElse`', `[\`mapOrElse\`](${resultPath}/map-or-else)`)
      .replace('`match`', `[\`match\`](${resultPath}/match)`)
      .replace('`Ok`', `[\`Ok\`](${resultPath})`)
      .replace('`or`', `[\`or\`](${resultPath}/or)`)
      .replace('`orElse`', `[\`orElse\`](${resultPath}/or-else)`)
      .replace('`Result`', `[\`Result\`](${resultPath})`)
      .replace('`sequence`', `[\`sequence\`](${resultPath}/sequence)`)
      .replace('`unwrap`', `[\`unwrap\`](${resultPath}/unwrap)`)
      .replace('`unwrapErr`', `[\`unwrapErr\`](${resultPath}/unwrap-err)`)
      .replace('`unwrapOr`', `[\`unwrapOr\`](${resultPath}/unwrap-or)`)
      .replace(
        /`unwrapOrElse`/,
        `[\`unwrapOrElse\`](${resultPath}/unwrap-or-else)`,
      )
  );
}

function getModule(docsPath: string): string {
  if (docsPath.includes('/array/')) return 'array';
  if (docsPath.includes('/console/')) return 'console';
  if (docsPath.includes('/fn/')) return 'fn';
  if (docsPath.includes('/gen/')) return 'gen';
  if (docsPath.includes('/guard/')) return 'guard';
  if (docsPath.includes('/number/')) return 'number';
  if (docsPath.includes('/option/')) return 'option';
  if (docsPath.includes('/result/')) return 'result';
  throw new Error(`Unrecognised: ${docsPath}`);
}
