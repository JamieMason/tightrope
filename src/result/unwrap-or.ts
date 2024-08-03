import { curry } from '../fn/lib/curry.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type UnwrapOr = {
  <Res extends Result<T, any>, T>(defaultValue: T): (result: Res) => T;
  <Res extends Result<T, any>, T>(defaultValue: T, result: Res): T;
};

/**
 * Extract value from an `Ok` or use a fallback value if an `Err`
 *
 * @tags result, unwrap, transform, transform-result, recover, errors
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.unwrap_or
 */
export const unwrapOr: UnwrapOr = curry(
  <Res extends Result<T, any>, T>(defaultValue: T, result: Res): T =>
    isOk(result) ? result.value : defaultValue,
  2,
);
