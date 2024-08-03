export { all } from './all.js';
export { andThen } from './and-then.js';
export { and } from './and.js';
export { expectErr } from './expect-err.js';
export { expect } from './expect.js';
export { filter } from './filter.js';
export { flatten } from './flatten.js';
export { fromGuard } from './from-guard.js';
export { fromTry } from './from-try.js';
export { isErr } from './is-err.js';
export { isOk } from './is-ok.js';
export { isResult } from './is-result.js';
export { mapErr } from './map-err.js';
export { mapOrElse } from './map-or-else.js';
export { mapOr } from './map-or.js';
export { map } from './map.js';
export { match } from './match.js';
export { ok } from './ok.js';
export { orElse } from './or-else.js';
export { or } from './or.js';
export { sequence } from './sequence.js';
export { tap } from './tap.js';
export { unwrapErr } from './unwrap-err.js';
export { unwrapOrElse } from './unwrap-or-else.js';
export { unwrapOr } from './unwrap-or.js';
export { unwrap } from './unwrap.js';

/**
 * `Result` is a type that represents either success (`Ok`) or failure (`Err`).
 *
 * `Result<T, E>` is the type used for returning and propagating errors. It is an enum with the variants, `Ok(T)`,
 * representing success and containing a value, and `Err(E)`, representing error and containing an error value.
 *
 * :::info
 *
 * `Result` allows you to construct a pipeline of commands that handle both the `Ok` and `Err` variants. This is useful
 * for handling errors and branching based on whether the previous operation was successful or not.
 *
 * :::
 *
 * :::tip
 *
 * Other terminology you might have heard:
 *
 * - `Result` is sometimes referred to as `Either`.
 * - `Ok` is sometimes referred to as `Right` or "the happy path".
 * - `Err` is sometimes referred to as `Left` or "the sad path".
 *
 * :::
 *
 * @tags result, type
 */
export type Result<T, E = unknown> = Ok<T> | Err<E>;

/**
 * Represent a correct value in the `Result` type.
 *
 * ## Example
 *
 * Here is how to create one directly:
 *
 * ```ts
 * import { Ok } from 'tightrope/result';
 *
 * const value = new Ok('Success!');
 * ```
 *
 * You can check if a value is an `Ok` instance by using the `isOk` function.
 *
 * ```ts
 * import { isOk } from 'tightrope/result/is-ok';
 *
 * const value = new Ok('Success!');
 * console.log(isOk(value)); // true
 * console.log(isOk('foo')); // false
 * console.log(isOk('Success! but this is not inside an Ok')); // false
 * ```
 *
 * `Ok` instances are usually returned from functions that can fail or encounter an error, and are combined with `Ok`
 * instances using the `Result` type.
 *
 * ## Use Cases
 *
 * Creating an `Ok` instance directly is useful when you want to represent an error in your program without having to go
 * through a pipeline or helper method that might not always be available or suitable for your specific use case.
 *
 * For example, if you're writing a custom error handler for your application and you need to represent a specific error
 * condition, you can create an `Ok` instance directly with the error message or code you want to use. This can give you
 * more control over the specific errors that your application can encounter and how they are handled.
 *
 * Another use case for creating an `Ok` instance directly is when you are writing tests for your application and you
 * want to simulate an error condition. By creating an `Ok` instance directly with a specific error message or code, you
 * can test how your application handles that error condition and ensure that it behaves as expected.
 *
 * @tags result, class, wrap
 */
export class Ok<T> {
  readonly _tag = 'Ok';
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  static create<OkT, ErrT = unknown>(value: OkT): Result<OkT, ErrT> {
    return new Ok<OkT>(value);
  }
}

/**
 * Represent an erroneous value in the `Result` type.
 *
 * ## Example
 *
 * Here is how to create one directly:
 *
 * ```ts
 * import { Err } from 'tightrope/result';
 *
 * const error = new Err(new Error('Something went wrong.'));
 * ```
 *
 * You can check if a value is an `Err` instance by using the `isErr` function.
 *
 * ```ts
 * import { isErr } from 'tightrope/result/is-err';
 *
 * const error = new Err(new Error('Something went wrong.'));
 * console.log(isErr(error)); // true
 * console.log(isErr('foo')); // false
 * console.log(isErr(new Error('not the same thing'))); // false
 * ```
 *
 * `Err` instances are usually returned from functions that can fail or encounter an error, and are combined with `Ok`
 * instances using the `Result` type.
 *
 * ## Use Cases
 *
 * Creating an `Err` instance directly is useful when you want to represent an error in your program without having to
 * go through a pipeline or helper method that might not always be available or suitable for your specific use case.
 *
 * For example, if you're writing a custom error handler for your application and you need to represent a specific error
 * condition, you can create an `Err` instance directly with the error message or code you want to use. This can give
 * you more control over the specific errors that your application can encounter and how they are handled.
 *
 * Another use case for creating an `Err` instance directly is when you are writing tests for your application and you
 * want to simulate an error condition. By creating an `Err` instance directly with a specific error message or code,
 * you can test how your application handles that error condition and ensure that it behaves as expected.
 *
 * @tags result, class, errors, wrap
 */
export class Err<E = unknown> {
  readonly _tag = 'Err';
  readonly value: E;

  constructor(err: E) {
    this.value = err;
  }

  static create<ErrT, OkT = never>(err: ErrT): Result<OkT, ErrT> {
    return new Err<ErrT>(err);
  }

  static fromMessage<OkT = never>(message: string): Result<OkT, Error> {
    return new Err(new Error(message));
  }
}
