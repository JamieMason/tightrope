import type {
  CallExpression,
  JSDoc,
  ParameterDeclaration,
  Project,
  Signature,
  SourceFile,
  Type,
  TypeAliasDeclaration,
  TypeParameterDeclaration,
  ts,
} from 'ts-morph';
import { SyntaxKind } from 'ts-morph';
import { isCalculable } from '../../src/number/is-calculable.js';
import { getCallExpressionsByName } from '../lib/get-call-expressions-by-name.js';
import { getExportedName } from '../lib/get-exported-name.js';
import { getJsDocs } from '../lib/get-js-docs.js';
import { getTypePredicate } from '../lib/get-type-predicate.js';

export interface CurriedFunction {
  args: ParameterDeclaration[];
  arity: {
    actual: number;
    /**
     * How many arguments we want to curry (the function could have a higher arity, but only want to curry the first
     * few)
     */
    curried: number;
  };
  exportedName: string;
  file: SourceFile;
  filePath: string;
  jsDocs: JSDoc[];
  returnType: Type<ts.Type>;
  signature: Signature;
  typeAliases: TypeAliasDeclaration[];
  typeParams: TypeParameterDeclaration[];
  typePredicate: string;
}

export function getAllCurriedFunctions(project: Project): CurriedFunction[] {
  return project.getSourceFiles().flatMap(file =>
    getCurriedFunctions(file).map(callExpr => {
      const filePath = callExpr.getSourceFile().getFilePath();
      const fnNode =
        callExpr.getFirstDescendantByKind(SyntaxKind.ArrowFunction) ||
        callExpr.getFirstDescendantByKind(SyntaxKind.FunctionExpression);
      const arityNode = callExpr.getArguments()?.[1];
      const arity = arityNode.getText();

      if (!fnNode) {
        throw new Error(`No function passed to curry() in ${filePath}`);
      }

      if (!isCalculable(arity)) {
        throw new Error(`Invalid arity passed to curry() in ${filePath}`);
      }

      const args = fnNode.getParameters();

      return {
        args,
        arity: {
          actual: args.length,
          curried: Number(arity),
        },
        exportedName: getExportedName(callExpr),
        file,
        filePath,
        jsDocs: getJsDocs(callExpr),
        returnType: fnNode.getReturnType(),
        signature: fnNode.getSignature(),
        typeAliases: fnNode.getTypeAliases(),
        typeParams: fnNode.getTypeParameters(),
        typePredicate: getTypePredicate(fnNode),
      };
    }),
  );
}

function getCurriedFunctions(
  file: SourceFile,
): CallExpression<ts.CallExpression>[] {
  return getCallExpressionsByName(/^curry$/, file);
}
