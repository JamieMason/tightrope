import type { CallExpression, ts } from 'ts-morph';
import { SyntaxKind } from 'ts-morph';

export function getCallExpressionName(
  callExpr: CallExpression<ts.CallExpression>,
): string {
  const id = callExpr.getFirstChildByKind(SyntaxKind.Identifier);
  return id?.getText() || '';
}
