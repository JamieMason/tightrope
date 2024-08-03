import type { ArrayElement } from './index.js';

/** @tags arrays, filter */
export function uniq<A extends any[], V = ArrayElement<A>>(arr: V[]): V[] {
  return Array.from(new Set(arr));
}
