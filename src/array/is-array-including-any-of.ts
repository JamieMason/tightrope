import { curry } from '../fn/lib/curry.js';
import { isAsymmetricMatch } from '../guard/is-asymmetric-match.js';
import { isArray } from './is-array.js';
import { some } from './some.js';

type IsArrayIncludingAnyOf = {
  <T extends any[]>(allowedValues: T): (value: unknown) => value is T;
  <T extends any[]>(allowedValues: T, value: unknown): value is T;
};

/**
 * Asserts that `value` is an `Array` including at least one of the members of `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingAnyOf: IsArrayIncludingAnyOf = curry(
  <T extends any[]>(allowedValues: T, value: unknown): value is T =>
    isArray(allowedValues) &&
    isArray(value) &&
    some(
      (member): member is T[number] => some(isAsymmetricMatch(member), value),
      allowedValues,
    ),
  2,
);
