import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';
import { Ok } from './result.js';

type Map = {
  <Res extends Result.Any, Fn extends (value: Result.OkType<Res>) => any>(
    mapFn: Fn,
  ): (result: Res) => Result<ReturnType<Fn>, Result.ErrType<Res>>;
  <Res extends Result.Any, Fn extends (value: Result.OkType<Res>) => any>(
    mapFn: Fn,
    result: Res,
  ): Result<ReturnType<Fn>, Result.ErrType<Res>>;
};

/**
 * Transform the value inside the `Ok` variant of a `Result`.
 *
 * It takes a `mapFn` function as its argument, which takes the current `Ok` value and returns a new value. The `map`
 * function then returns a new `Result` object containing the transformed value. If the original `Result` object was an
 * `Err`, `map` will return the original `Err` without calling the `mapFn` function.
 *
 * In other words, `map` allows you to transform the contents of an `Ok` variant of a `Result` object, while leaving an
 * `Err` variant unchanged. It's useful when you need to apply a function to a value inside a `Result` object without
 * changing the structure of the `Result` object itself.
 *
 * ## Example
 *
 * In this example, `map` is used twice in the `pipe` function to transform the value inside the `Ok` variant of the
 * `Result` object. The final `Result` object contains the result of applying both functions to the original value.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { multiply } from 'tightrope/number/multiply';
 * import { sum } from 'tightrope/number/sum';
 * import { Ok } from 'tightrope/result';
 * import { map } from 'tightrope/result/map';
 * import { unwrap } from 'tightrope/result/unwrap';
 *
 * const value: number = pipe(Ok.create(2), map(sum(5)), map(multiply(2)), unwrap);
 *
 * console.log(value); // Output: 14
 * ```
 *
 * :::tip
 *
 * Both `map` and `andThen` are functions used to transform the value inside a `Result` object. The difference between
 * them is that **`map` transforms the value inside the `Ok` variant** of the `Result` object, while **`andThen`
 * transforms the `Ok` variant itself**.
 *
 * When your function returns a value, you can use `map` to transform the value inside an `Ok` variant.
 *
 * :::
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
 * `map` runs on the `Ok` variant. If any of the operations return an `Err` object then `map` will skip and return the
 * `Err`.
 *
 * This makes it easy to handle errors in a functional and composable way.
 *
 * :::
 *
 * @tags result, transform, transform-value, right-biased
 * @see https://doc.rust-lang.org/core/result/enum.Result.html#method.map
 */
export const map: Map = curry(
  withSafety(
    <Res extends Result.Any, Fn extends (value: Result.OkType<Res>) => any>(
      mapFn: Fn,
      result: Res,
    ): Result<ReturnType<Fn>, Result.ErrType<Res>> =>
      isOk(result)
        ? Ok.create<ReturnType<Fn>, Result.ErrType<Res>>(mapFn(result.value))
        : result,
  ),
  2,
);
