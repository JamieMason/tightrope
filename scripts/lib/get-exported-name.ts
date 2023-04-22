import type { CallExpression, ts } from 'ts-morph';
import { SyntaxKind } from 'ts-morph';

export function getExportedName(
  callExpr: CallExpression<ts.CallExpression>,
): string {
  return (
    callExpr
      .getFirstAncestorByKind(SyntaxKind.VariableDeclaration)
      ?.getFirstDescendantByKind(SyntaxKind.Identifier)
      ?.getText() || ''
  );
}
