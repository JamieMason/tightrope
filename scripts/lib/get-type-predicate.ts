import type { ArrowFunction, FunctionExpression } from 'ts-morph';

export function getTypePredicate(
  fnNode: ArrowFunction | FunctionExpression,
): string {
  return fnNode.getReturnTypeNode()?.getText() || '';
}
