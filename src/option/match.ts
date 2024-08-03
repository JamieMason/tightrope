import { curry } from '../fn/lib/curry.js';
import { isNone } from './is-none.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type Cases<Opt extends Option.Any> = {
  Some(value: Option.Type<Opt>): Option.Type<Opt>;
  None(): Option.Type<Opt>;
};

type Match = {
  <Opt extends Option.Any>(
    cases: Cases<Opt>,
  ): (option: Opt) => Option.Type<Opt>;
  <Opt extends Option.Any>(cases: Cases<Opt>, option: Opt): Option.Type<Opt>;
};

/**
 * Extract value from both a `Some` or a `None`.
 *
 * The match function takes an object containing two functions: `Some` and `None`, which are used to handle the values
 * of the `Some` and `None` variants of an `Option` object. It then returns a new function that takes an `Option` object
 * and returns the result of applying either the `Some` or `None` function to the value inside the `Option`, depending
 * on which variant it contains.
 *
 * @tags option, unwrap
 */
export const match: Match = curry(
  <Opt extends Option.Any>(
    cases: Cases<Opt>,
    option: Opt,
  ): Option.Type<Opt> => {
    if (isSome(option)) return cases.Some(option.value);
    if (isNone(option)) return cases.None();
    throw new Error('match() did not match any cases');
  },
  2,
);
