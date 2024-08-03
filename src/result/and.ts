import { curry } from '../fn/lib/curry.js';
import { isErr } from './is-err.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type And = {
  <B extends Result.Any, A extends Result.Any>(
    b: B,
  ): (a: A) => Result.Union<B, A>;
  <B extends Result.Any, A extends Result.Any>(b: B, a: A): Result.Union<B, A>;
};

/**
 * Like the `&&` operator, but applied to `Result` types.
 *
 * The `and` function is used to combine two `Result` objects, returning either the first error encountered, or the
 * second `Ok` value if both `Result` objects are successful.
 *
 * ## Behaviour
 *
 * `and` behaves just like the `&&` operator, but for support of `Result` types:
 *
 * | Scenario       | Pseudocode              | Outcome |
 * | :------------- | :---------------------- | :------ |
 * | `Ok && Err`    | `pipe(Ok, and(Err))`    | `Err`   |
 * | `Err && Ok`    | `pipe(Err, and(Ok))`    | `Err`   |
 * | `Err1 && Err2` | `pipe(Err1, and(Err2))` | `Err1`  |
 * | `Ok1 && Ok2`   | `pipe(Ok1, and(Ok2))`   | `Ok2`   |
 *
 * ## Examples
 *
 * In this example, the `and` function is used to combine two `Result` objects (`result1` and `result2`). Since
 * `result2` is an `Err` object, the final result is also an `Err` object containing the error message.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { and } from 'tightrope/result/and';
 * import { divide } from 'tightrope/number/divide';
 *
 * const result1 = divide(10, 5); // returns Ok(2)
 * const result2 = divide(20, 0); // returns Err("Cannot divide by zero")
 *
 * const finalResult = pipe(result1, and(result2));
 *
 * console.log(finalResult); // Err("Cannot divide by zero")
 * ```
 *
 * In this example, the `and` function is used to combine two `Result` objects (`result1` and `result2`). Since both
 * `Result` objects are successful, the final result is the second `Ok` value (`Ok(5)`).
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { and } from 'tightrope/result/and';
 * import { divide } from 'tightrope/number/divide';
 *
 * const result1 = divide(10, 5); // returns Ok(2)
 * const result2 = divide(20, 4); // returns Ok(5)
 *
 * const finalResult = pipe(result1, and(result2)); // returns Ok(5)
 *
 * console.log(finalResult); // Ok(5)
 * ```
 *
 * @tags result, transform, transform-result
 * @see http://jamiemason.github.io/tightrope/api/result/or
 */
export const and: And = curry(
  <B extends Result.Any, A extends Result.Any>(
    b: B,
    a: A,
  ): Result.Union<B, A> => {
    if (isOk(a) && isErr(b)) return b;
    if (isErr(a) && isOk(b)) return a;
    if (isErr(a) && isErr(b)) return a;
    return b;
  },
  2,
);
