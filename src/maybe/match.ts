import type { Maybe } from '.';
import { isNothing } from './is-nothing';
import { isJust } from './is-just';

/**
 * Extract value from both a `Just` or a `Nothing`.
 *
 * The match function takes an object containing two functions: `Just` and `Nothing`, which are used to handle the values
 * of the `Just` and `Nothing` variants of an `Maybe` object. It then returns a new function that takes an `Maybe` object
 * and returns the result of applying either the `Just` or `Nothing` function to the value inside the `Maybe`, depending
 * on which variant it contains.
 *
 * ## Example
 *
 * In this example, `andThen` is used to transform the `Just` variant of the `Maybe` object.
 *
 * - If the value inside the `Just` variant is greater than `50`, a `Nothing` variant is returned.
 * - If the value is less than or equal to `50`, a `Just` variant containing the original value is returned.
 *
 * The `match` function is then used to handle the two possible variants of the `Maybe` object, printing the
 * appropriate message to the console.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { andThen } from 'tightrope/maybe/and-then';
 * import { Nothing } from 'tightrope/maybe';
 * import { match } from 'tightrope/maybe/match';
 * import { Just } from 'tightrope/maybe';
 *
 * const maybe = pipe(
 *   60,
 *   Just.create,
 *   andThen((value) => (value > 50 ? new Nothing() : new Just(value))),
 *   match({
 *     Just: (value) => `The value is ${value}`,
 *     Nothing: () => `Error: Value too high`,
 *   }),
 * );
 *
 * console.log(maybe); // Outputs: "Error: Value too high"
 * ```
 *
 * @tags maybe, unwrap
 */
export const match = <JustT, Next>(cases: {
  Just(value: JustT): Next;
  Nothing(): Next;
}) => {
  return (maybe: Maybe<JustT>): Next => {
    for (const key in cases) {
      if (key === 'Just' && isJust<JustT>(maybe)) {
        return cases[key](maybe.value);
      }
      if (key === 'Nothing' && isNothing(maybe)) {
        return cases[key]();
      }
    }
    throw new Error('match() did not match any cases');
  };
};
