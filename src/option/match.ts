import type { Option } from '.';
import { isNone } from './is-none';
import { isSome } from './is-some';

/**
 * Extract value from both a `Some` or a `None`.
 *
 * The match function takes an object containing two functions: `Some` and `None`, which are used to handle the values
 * of the `Some` and `None` variants of an `Option` object. It then returns a new function that takes an `Option` object
 * and returns the result of applying either the `Some` or `None` function to the value inside the `Option`, depending
 * on which variant it contains.
 *
 * ## Example
 *
 * In this example, `andThen` is used to transform the `Some` variant of the `Option` object.
 *
 * - If the value inside the `Some` variant is greater than `50`, a `None` variant is returned.
 * - If the value is less than or equal to `50`, a `Some` variant containing the original value is returned.
 *
 * The `match` function is then used to handle the two possible variants of the `Option` object, printing the
 * appropriate message to the console.
 *
 * ```ts
 * import { pipe } from 'tightrope/fn/pipe';
 * import { andThen } from 'tightrope/option/and-then';
 * import { None } from 'tightrope/option';
 * import { match } from 'tightrope/option/match';
 * import { Some } from 'tightrope/option';
 *
 * const option = pipe(
 *   60,
 *   Some.create,
 *   andThen((value) => (value > 50 ? new None() : new Some(value))),
 *   match({
 *     Some: (value) => `The value is ${value}`,
 *     None: () => `Error: Value too high`,
 *   }),
 * );
 *
 * console.log(option); // Outputs: "Error: Value too high"
 * ```
 *
 * @tags option, unwrap
 */
export const match = <SomeT, Next>(cases: {
  Some(value: SomeT): Next;
  None(): Next;
}) => {
  return (option: Option<SomeT>): Next => {
    for (const key in cases) {
      if (key === 'Some' && isSome<SomeT>(option)) {
        return cases[key](option.value);
      }
      if (key === 'None' && isNone(option)) {
        return cases[key]();
      }
    }
    throw new Error('match() did not match any cases');
  };
};
