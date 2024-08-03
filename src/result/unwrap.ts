import { isOk } from './is-ok.js';
import type { Result } from './result.js';

/**
 * Extract value from an `Ok` or throw on an `Err`.
 *
 * @tags result, unwrap, right-biased, unsafe
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap
 */
export function unwrap<Res extends Result.Any>(
  result: Res,
): Result.OkType<Res> {
  if (isOk(result)) return result.value;
  if (result.value instanceof Error) throw result.value;
  throw new Error(String(result.value));
}
