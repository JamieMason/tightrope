import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type AndThen = {
  <
    Res extends Result.Any,
    Fn extends (value: Result.OkType<Res>) => Result.Any,
  >(
    mapFn: Fn,
  ): (
    result: Res,
  ) => Result<
    Result.OkType<ReturnType<Fn>>,
    Result.ErrType<Res> | Result.ErrType<ReturnType<Fn>>
  >;
  <
    Res extends Result.Any,
    Fn extends (value: Result.OkType<Res>) => Result.Any,
  >(
    mapFn: Fn,
    result: Res,
  ): Result<
    Result.OkType<ReturnType<Fn>>,
    Result.ErrType<Res> | Result.ErrType<ReturnType<Fn>>
  >;
};

/**
 * Same as `flatMap` or `chain`, transform a `Result` with the value of another.
 *
 * When your function returns a `Result` object, you can use `andThen` to transform the `Ok` variant itself.
 *
 * ::: tip
 *
 * Both `map` and `andThen` are functions used to transform the value inside a `Result` object. The difference between
 * them is that **`map` transforms the value inside the `Ok` variant** of the `Result` object, while **`andThen`
 * transforms the `Ok` variant itself**.
 *
 * :::
 *
 * ## Example
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import type { Result } from 'tightrope/result';
 * import { Err, Ok } from 'tightrope/result';
 * import { andThen } from 'tightrope/result/and-then';
 * import { map } from 'tightrope/result/map';
 * import { multiply } from 'tightrope/number/multiply';
 * import { unwrapOr } from 'tightrope/result/unwrap-or';
 *
 * function divide(x: number, y: number): Result<number, Error> {
 *   if (y === 0) {
 *     return new Err(new Error('Division by zero'));
 *   }
 *   return new Ok(x / y);
 * }
 *
 * const amount = pipe(
 *   Ok.create<number, Error>(16),
 *   andThen((n) => divide(n, 2)),
 *   andThen((n) => divide(n, 4)),
 *   map(multiply(100)),
 *   unwrapOr(0),
 * );
 *
 * console.log(amount); // 200
 * ```
 *
 * :::info
 *
 * `Result` allows you to construct a pipeline of commands that handle both the `Ok` and `Err` variants. This is useful
 * for handling errors and branching based on whether the previous operation was successful or not.
 *
 * :::
 *
 * :::info
 *
 * `andThen` runs on the `Ok` variant. If any of the operations return an `Err` object then `andThen` will skip and
 * return the `Err`.
 *
 * This makes it easy to handle errors in a functional and composable way.
 *
 * :::
 *
 * :::tip
 *
 * Other terminology you might have heard:
 *
 * - `andThen` is sometimes referred to as `chain` or `flatMap`.
 * - `Result` is sometimes referred to as `Either`.
 * - `Ok` is sometimes referred to as `Right` or "the happy path".
 * - `Err` is sometimes referred to as `Left` or "the sad path".
 *
 * :::
 *
 * @tags result, transform, transform-result, right-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.and_then
 */
export const andThen: AndThen = curry(
  withSafety(
    <
      Res extends Result.Any,
      Fn extends (value: Result.OkType<Res>) => Result.Any,
    >(
      mapFn: Fn,
      result: Res,
    ): Result<
      Result.OkType<ReturnType<Fn>>,
      Result.ErrType<Res> | Result.ErrType<ReturnType<Fn>>
    > => (isOk(result) ? mapFn(result.value) : result),
  ),
  2,
);
