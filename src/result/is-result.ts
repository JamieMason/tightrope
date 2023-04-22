import type { Result } from '.';
import { isErr } from './is-err';
import { isOk } from './is-ok';

/**
 * Check if value is an instance of either the `Ok` or `Err` classes.
 *
 * You would use `isResult` when you want to check if a value is a `Result` instance, regardless of whether it contains
 * an `Ok` or `Err` variant.
 *
 * @tags result, guard
 */
export function isResult<OkT, ErrT = unknown>(
  value: unknown,
): value is Result<OkT, ErrT> {
  return isOk(value) || isErr(value);
}
