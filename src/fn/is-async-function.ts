import { hasType } from '../guard/has-type.js';
import type { AnyFnAsync } from './index.js';

/**
 * Asserts that a value is a function using `async` and `await` syntax.
 *
 * @tags guard, functions, async
 */
export const isAsyncFunction = <Fn extends AnyFnAsync>(
  value: Fn | unknown,
): value is Fn extends AnyFnAsync ? Fn : AnyFnAsync =>
  hasType<AnyFnAsync>('AsyncFunction', value);
