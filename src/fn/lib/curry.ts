/** @private */
export function curry<F extends (...args: any[]) => any>(
  fn: F,
  arity = fn.length,
): any {
  return function curriedFn(...args: unknown[]): unknown {
    if (args.length >= arity) {
      return fn(...args);
    }
    return curriedFn.bind(null, ...args);
  } as unknown;
}
