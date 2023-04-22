/** @tags arrays, transform */
export function flat<A extends any[]>(arr: A): FlatArray<A, 1>[] {
  return arr.flat();
}
