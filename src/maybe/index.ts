/**
 * `Maybe` is a type that represents either a value (`Just`) or the absence of a value (`Nothing`).
 *
 * `Maybe<T>` is the type used for expressing the possibility of the absence of a value. It is an enum with the
 * variants, `Just(T)`, representing the presence of a value, and `Nothing`, representing the absence of a value.
 *
 * :::info
 *
 * `Maybe` allows you to construct a pipeline of commands that handle both the `Just` and `Nothing` variants. This is
 * useful for handling cases where a value might be missing or undefined, and branching based on whether the previous
 * operation returned a value or not.
 *
 * :::
 *
 * :::tip
 *
 * Other terminology you might have heard:
 *
 * - `Maybe` is sometimes referred to as `Maybe`.
 * - `Just` is sometimes referred to as `Just` or "the value path".
 * - `Nothing` is sometimes referred to as `Nothing` or "the empty path".
 *
 * :::
 *
 * @tags maybe, type
 */
export type Maybe<T> = Just<T> | Nothing;

/**
 * Represent a value in the `Maybe` type.
 *
 * ## Example
 *
 * Here is how to create one directly:
 *
 * ```ts
 * import { Just } from 'tightrope/maybe';
 *
 * const value = new Just('Hello, world!');
 * ```
 *
 * You can check if a value is a `Just` instance by using the `isJust` function.
 *
 * ```ts
 * import { isJust } from 'tightrope/maybe/is-some';
 *
 * const value = new Just('Hello, world!');
 * console.log(isJust(value)); // true
 * console.log(isJust('foo')); // false
 * console.log(isJust('Hello, world! but this is not inside a Just')); // false
 * ```
 *
 * `Just` instances are usually returned from functions that might not return a value, and are combined with `Nothing`
 * instances using the `Maybe` type.
 *
 * ## Use Cases
 *
 * Creating a `Just` instance directly is useful when you want to represent a value in your program without having to go
 * through a pipeline or helper method that might not always be available or suitable for your specific use case.
 *
 * For example, if you're writing a custom value handler for your application and you need to represent a specific value
 * condition, you can create a `Just` instance directly with the value you want to use. This can give you more control
 * over the specific values that your application can encounter and how they are handled.
 *
 * Another use case for creating a `Just` instance directly is when you are writing tests for your application and you
 * want to simulate a value condition. By creating a `Just` instance directly with a specific value, you can test how
 * your application handles that value condition and ensure that it behaves as expected.
 *
 * @tags maybe, class, wrap
 */
export class Just<T> {
  readonly _tag = 'Just';
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }

  static create<T>(value: T): Just<T> {
    return new Just<T>(value);
  }
}

export type Nothing = typeof nothing;

/**
 * Represent an absence of value in the `Maybe` type.
 *
 * ## Example
 *
 * You can check if a value is a `Nothing` instance by using the `isNothing` function.
 *
 * ```ts
 * import { isNothing } from 'tightrope/maybe/is-nothing';
 *
 * console.log(isNothing(nothing)); // true
 * console.log(isNothing('foo')); // false
 * console.log(isNothing(null)); // false
 * ```
 *
 * `Nothing` instances are usually returned from functions that might not return a value, and are combined with `Just`
 * instances using the `Maybe` type.
 *
 * ## Use Cases
 *
 * Referencing the `Nothing` instance is useful when you want to represent an absence of value in your program without
 * having to go through a pipeline or helper method that might not always be available or suitable for your specific use
 * case.
 *
 * For example, if you're writing a custom value handler for your application and you need to represent a specific
 * absence of value condition, you can reference the `Nothing` instance. This can give you more control over the specific
 * value absences that your application can encounter and how they are handled.
 *
 * Another use case for referencing the `Nothing` instance is when you are writing tests for your application and you want
 * to simulate a value absence condition. By referencing the `Nothing` instance, you can test how your application handles
 * that value absence condition and ensure that it behaves as expected.
 *
 * @tags maybe, class, errors, wrap
 */
export const nothing = Object.freeze({
  _tag: 'Nothing',
});
