export { flow } from './flow.js';
export { withSafety } from './with-safety.js';
export { get } from './get.js';
export { identity } from './identity.js';
export { isAsyncFunction } from './is-async-function.js';
export { isFunction } from './is-function.js';
export { isGeneratorFunction } from './is-generator-function.js';
export { noOp } from './no-op.js';
export { pipe } from './pipe.js';
export { tap } from './tap.js';
export { throwsAnyError } from './throws-any-error.js';
export { throwsErrorOfType } from './throws-error-of-type.js';

/** A function with no arguments, returning a value */
export type LazyValue = () => any;

/** A function of any kind */
export type AnyFn = (...args: any[]) => any;

/** An async function of any kind */
export type AnyFnAsync = (...args: any[]) => Promise<any>;

/** A Reducer function */
export type Reducer<I, O> = (acc: O, value: I) => O;
