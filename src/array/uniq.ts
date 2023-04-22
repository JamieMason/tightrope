import type { ArrayElement } from '../fn/types';

/** @tags arrays, filter */
export function uniq<A extends any[], V = ArrayElement<A>>(arr: V[]): V[] {
  return Array.from(new Set(arr));
}
