import { curry } from '../fn/curry';
import type { AnyResult, ResOk } from '../fn/types';
import { isOk } from './is-ok';

export type Expect = {
  (msg: string): {
    <Res extends AnyResult>(res: Res): ResOk<Res>;
  };
  <Res extends AnyResult>(msg: string, res: Res): ResOk<Res>;
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
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { multiply } from 'tightrope/number/multiply';
 * import { sum } from 'tightrope/number/sum';
 * import { expect } from 'tightrope/result/expect';
 * import { Ok } from 'tightrope/result';
 *
 * const result: number = pipe(Ok.create(10), multiply(2), sum(5), expect("I can't imagine this failing"));
 *
 * // result will be 25
 * ```
 *
 * @tags result, unwrap, unsafe, right-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.expect
 */
export const expect: Expect = curry(
  <Res extends AnyResult>(msg: string, res: Res): ResOk<Res> => {
    if (isOk<any>(res)) return res.value;
    throw new Error(`${msg}: ${res.value}`);
  },
  2,
);
