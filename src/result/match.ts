import { curry } from '../fn/lib/curry.js';
import { isErr } from './is-err.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type Cases<Res extends Result.Any> = {
  Ok(value: Result.OkType<Res>): Result.OkType<Res>;
  Err(err: Result.ErrType<Res>): Result.OkType<Res>;
};

type Match = {
  <Res extends Result.Any>(
    cases: Cases<Res>,
  ): (result: Res) => Result.OkType<Res>;
  <Res extends Result.Any>(cases: Cases<Res>, result: Res): Result.OkType<Res>;
};

/**
 * Extract value from both an `Ok` or an `Err`.
 *
 * The match function takes an object containing two functions: `Ok` and `Err`, which are used to handle the values of
 * the `Ok` and `Err` variants of a `Result` object. It then returns a new function that takes a `Result` object and
 * returns the result of applying either the `Ok` or `Err` function to the value inside the `Result`, depending on which
 * variant it contains.
 *
 * ## Example
 *
 * In this example, `andThen` is used to transform the `Ok` variant of the `Result` object.
 *
 * - If the value inside the `Ok` variant is greater than `50`, an `Err` variant containing the error message `"Value too
 *   high"` is returned.
 * - If the value is less than or equal to `50`, an `Ok` variant containing the original value is returned.
 *
 * The `match` function is then used to handle the two possible variants of the `Result` object, printing the
 * appropriate message to the console.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { andThen } from 'tightrope/result/and-then';
 * import { Err } from 'tightrope/result';
 * import { match } from 'tightrope/result/match';
 * import { Ok } from 'tightrope/result';
 *
 * const result = pipe(
 *   60,
 *   Ok.create,
 *   andThen((value) => (value > 50 ? new Err('Value too high') : new Ok(value))),
 *   match({
 *     Ok: (value) => `The value is ${value}`,
 *     Err: (err) => `Error: ${err}`,
 *   }),
 * );
 *
 * console.log(result); // Outputs: "Error: Value too high"
 * ```
 *
 * ## Use Cases
 *
 * `match` is used to destructure and extract the value from a `Result` object and perform different actions based on
 * whether it is an `Ok` or `Err`. This is useful when handling errors or when processing data that may or may not
 * contain errors.
 *
 * One common use case for `match` is error handling. When an operation can result in an error, it can return a `Result`
 * object that either contains an `Ok` value or an `Err` value. `match` can be used to handle each case separately, for
 * example to log the error message in case of an `Err` or continue processing with the `Ok` value.
 *
 * @tags result, unwrap
 */
export const match: Match = curry(
  <Res extends Result.Any>(
    cases: Cases<Res>,
    result: Res,
  ): Result.OkType<Res> => {
    if (isOk(result)) return cases.Ok(result.value);
    if (isErr(result)) return cases.Err(result.value);
    throw new Error('match() did not match any cases');
  },
  2,
);
