import type {
  CallExpression,
  JSDoc,
  ParameterDeclaration,
  Project,
  Signature,
  SourceFile,
  ts,
  Type,
  TypeAliasDeclaration,
  TypeParameterDeclaration,
} from 'ts-morph';
import { SyntaxKind } from 'ts-morph';
import { isCalculable } from '../../src/guard/is-calculable.js';
import { getCallExpressionsByName } from '../lib/get-call-expressions-by-name.js';
import { getExportedName } from '../lib/get-exported-name.js';
import { getJsDocs } from '../lib/get-js-docs.js';

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
  filePath: string;
  jsDocs: JSDoc[];
  returnType: Type<ts.Type>;
  signature: Signature;
  typeAliases: TypeAliasDeclaration[];
  typeParams: TypeParameterDeclaration[];
}

export function getAllCurriedFunctions(project: Project): CurriedFunction[] {
  return project
    .getSourceFiles()
    .flatMap((file) => getCurriedFunctions(file))
    .reduce<CurriedFunction[]>((all, callExpr) => {
      const func =
        callExpr.getFirstChildByKind(SyntaxKind.ArrowFunction) ||
        callExpr.getFirstChildByKind(SyntaxKind.FunctionExpression);
      if (func) {
        const args = func.getParameters();
        const arity = callExpr.getArguments()?.[1]?.getText();

        if (!isCalculable(arity)) {
          throw new Error(
            `Arity missing from ${callExpr.getSourceFile().getFilePath()}`,
          );
        }

        all.push({
          args,
          arity: {
            actual: args.length,
            curried: Number(callExpr.getArguments()?.[1]?.getText()),
          },
          exportedName: getExportedName(callExpr),
          filePath: callExpr.getSourceFile().getFilePath(),
          jsDocs: getJsDocs(callExpr),
          returnType: func.getReturnType(),
          signature: func.getSignature(),
          typeAliases: func.getTypeAliases(),
          typeParams: func.getTypeParameters(),
        });
      }
      return all;
    }, []);
}

function getCurriedFunctions(
  file: SourceFile,
): CallExpression<ts.CallExpression>[] {
  return getCallExpressionsByName(/^curry$/, file);
}
