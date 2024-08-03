import type { CallExpression, SourceFile, ts } from 'ts-morph';
import { SyntaxKind } from 'ts-morph';
import { getCallExpressionName } from './get-call-expression-name.js';

export function getCallExpressionsByName(
  name: RegExp,
  file: SourceFile,
): CallExpression<ts.CallExpression>[] {
  return file
    .getDescendantsOfKind(SyntaxKind.CallExpression)
    .filter(callExpr => getCallExpressionName(callExpr).search(name) !== -1);
}
