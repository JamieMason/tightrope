import { curry } from '../fn/lib/curry.js';
import { isErr } from './is-err.js';
import type { Result } from './result.js';

type Or = {
  <Res extends Result.Any>(b: Res): (a: Res) => Res;
  <Res extends Result.Any>(b: Res, a: Res): Res;
};

/**
 * Like the `||` operator, but applied to `Result` types.
 *
 * | Scenario       | Pseudocode             | Outcome               |
 * | :------------- | :--------------------- | --------------------- |
 * | `Ok OR Err`    | `pipe(Ok, or(Err))`    | `Ok`                  |
 * | `Err OR Ok`    | `pipe(Err, or(Ok))`    | `Ok`                  |
 * | `Err1 OR Err2` | `pipe(Err1, or(Err2))` | `Err2`                |
 * | `Ok1 OR Ok2`   | `pipe(Ok1, or(Ok2))`   | `Ok1` (first Ok wins) |
 *
 * @tags result, transform, transform-result, recover, errors, left-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.or
 */
export const or: Or = curry(
  <Res extends Result.Any>(b: Res, a: Res): Res => (isErr(a) ? b : a),
  2,
);
