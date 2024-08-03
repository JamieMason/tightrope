import type { Result } from './result.js';
import { Ok } from './result.js';

/**
 * Check if value is an instance of the `Ok` class.
 *
 * @tags result, guard
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.is_ok
 */
export function isOk<T extends Result.Any>(
  value: T | unknown,
): value is Ok<Result.OkType<T>> {
  return value instanceof Ok && value._tag === 'Ok';
}
