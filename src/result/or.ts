import type { AnyResult, ResultUnion } from '../fn/types.js';
import { isErr } from './is-err.js';

/**
 * Like the `||` operator, but applied to `Result` types.
 *
 * You should use `or` when you want a simple fallback `Result` object without any additional transformation. For
 * example, if you want to return a default `Ok` value if a `Result` object is `Err`.
 *
 * `or` is a function that takes a `Result` object as its argument, and returns either the same `Result` object, or
 * another `Result` object passed as an argument to `or`, depending on whether the first `Result` object is an `Err` or
 * an `Ok`.
 *
 * If the first `Result` object is an `Ok`, it is returned as is, otherwise the second `Result` object passed as an
 * argument is returned.
 *
 * :::tip
 *
 * Both `or` and `orElse` can be used to provide fallback behavior for `Err` cases in a `Result` object. However, `or`
 * returns the provided fallback `Result` object directly, while `orElse` applies a function to transform the `Err` case
 * before returning the fallback `Result`.
 *
 * :::
 *
 * ## Behaviour
 *
 * `or` behaves just like the `||` operator, but for support of `Result` types:
 *
 * | Scenario       | Pseudocode             | Outcome               |
 * | :------------- | :--------------------- | --------------------- |
 * | `Ok OR Err`    | `pipe(Ok, or(Err))`    | `Ok`                  |
 * | `Err OR Ok`    | `pipe(Err, or(Ok))`    | `Ok`                  |
 * | `Err1 OR Err2` | `pipe(Err1, or(Err2))` | `Err2`                |
 * | `Ok1 OR Ok2`   | `pipe(Ok1, or(Ok2))`   | `Ok1` (first Ok wins) |
 *
 * ## Example
 *
 * Here's an example demonstrating each scenario
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { Err } from 'tightrope/result';
 * import { Ok } from 'tightrope/result';
 * import { or } from 'tightrope/result/or';
 *
 * const err1 = new Err('Error 1');
 * const err2 = new Err('Error 2');
 * const ok1 = new Ok('Success 1');
 * const ok2 = new Ok('Success 2');
 *
 * // Scenario 1: Ok || Err => Ok
 * const res1 = pipe(ok1, or(err1)); // Returns Ok('Success 1')
 *
 * // Scenario 2: Err || Ok => Ok
 * const res2 = pipe(err1, or(ok1)); // Returns Ok('Success 1')
 *
 * // Scenario 3: Err1 || Err2 => Err2
 * const res3 = pipe(err1, or(err2)); // Returns Err('Error 2')
 *
 * // Scenario 4: Ok1 || Ok2 => Ok1
 * const res4 = pipe(ok1, or(ok2)); // Returns Ok('Success 1')
 * ```
 *
 * ## Use Cases
 *
 * - **Providing a fallback value**: provide a fallback value or a default `Result` in case the initial `Result` is an
 *   `Err`.
 * - **Chaining operations**: chain operations together, allowing for more concise code.
 * - **Error handling**: handle different types of errors in a single place.
 * - **Simplifying branching logic**: simplify branching logic and reduce the number of nested `if` statements.
 *
 * @tags result, transform, transform-result, recover, errors, left-biased
 * @see https://jamiemason.github.io/tightrope/api/result/or-else
 * @see https://jamiemason.github.io/tightrope/api/result/and
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.or
 */
export function or<ResultB extends AnyResult>(b: ResultB) {
  return <ResultA extends AnyResult>(
    a: ResultA,
  ): ResultUnion<ResultB, ResultA> => (isErr(a) ? b : a);
}
