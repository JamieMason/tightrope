import type { CallExpression, JSDoc, ts } from 'ts-morph';
import { SyntaxKind } from 'ts-morph';

export function getJsDocs(
  callExpr: CallExpression<ts.CallExpression>,
): JSDoc[] {
  return (
    callExpr
      .getFirstAncestorByKind(SyntaxKind.VariableStatement)
      ?.getJsDocs() || []
  );
}
