import { hasType } from './has-type.js';

/**
 * Asserts that a value is a function using `async` and `await` syntax.
 *
 * @tags guard, functions, async
 */
export const isAsyncFunction =
  hasType<(...args: any[]) => Promise<any>>('AsyncFunction');
