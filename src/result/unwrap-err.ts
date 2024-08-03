import { isErr } from './is-err.js';
import type { Result } from './result.js';

/**
 * Extract value from an `Err` or throw on an `Ok`.
 *
 * @tags result, unwrap, unsafe, errors
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_err
 */
export function unwrapErr<Res extends Result.Any>(
  result: Res,
): Result.ErrType<Res> {
  if (isErr(result)) return result.value;
  throw new Error(`unwrapErr encountered Ok<${result.value}>`);
}
