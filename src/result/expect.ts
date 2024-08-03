import { curry } from '../fn/lib/curry.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type Expect = {
  <Res extends Result.Any>(msg: string): (res: Res) => Result.OkType<Res>;
  <Res extends Result.Any>(msg: string, res: Res): Result.OkType<Res>;
};

/**
 * Extract value from an `Ok` or throw with the given message on an `Err`.
 *
 * Use `expect` to unwrap a `Result` when you are "certain" that the `Result` value will be an `Ok`, and you want to
 * extract the value contained in it.
 *
 * If the `Result` value ever turns out to be an `Err`, it will throw an `Error` with the given message.
 *
 * :::warning
 *
 * `expect` will throw if the `Result` is an `Err`.
 *
 * :::
 *
 * @tags result, unwrap, unsafe, right-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.expect
 */
export const expect: Expect = curry(
  <Res extends Result.Any>(msg: string, res: Res): Result.OkType<Res> => {
    if (isOk(res)) return res.value;
    throw new Error(`${msg}: ${res.value}`);
  },
  2,
);
