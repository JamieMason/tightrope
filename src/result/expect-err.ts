import { curry } from '../fn/lib/curry.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type ExpectErr = {
  <Res extends Result.Any>(msg: string): (res: Res) => Result.ErrType<Res>;
  <Res extends Result.Any>(msg: string, res: Res): Result.ErrType<Res>;
};

/**
 * Unwrap an expected `Err` value from a `Result`, or throw if it is an `Ok`.
 *
 * @tags result, unwrap, errors, unsafe
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.expect_err
 */
export const expectErr: ExpectErr = curry(
  <Res extends Result.Any>(msg: string, res: Res): Result.ErrType<Res> => {
    if (isOk(res)) throw new Error(msg);
    return res.value;
  },
  2,
);
