import { isErr } from './is-err.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

/**
 * Check if value is an instance of either the `Ok` or `Err` classes.
 *
 * You would use `isResult` when you want to check if a value is a `Result` instance, regardless of whether it contains
 * an `Ok` or `Err` variant.
 *
 * @tags result, guard
 */
export function isResult(value: unknown): value is Result.Any {
  return isOk(value) || isErr(value);
}
