import { curry } from '../fn/lib/curry.js';
import { isAsymmetricMatch } from '../guard/is-asymmetric-match.js';
import { every } from './every.js';
import { isArray } from './is-array.js';
import { some } from './some.js';

type IsArrayIncludingAllOf = {
  <T extends any[]>(allowedValues: T): (value: unknown) => value is T;
  <T extends any[]>(allowedValues: T, value: unknown): value is T;
};

/**
 * Asserts that `value` is an `Array` including all of the values provided in `allowedValues`. It could also include
 * additional values or be in a different order, but if every value in `allowedValues` features in `value` then this
 * will return `true`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingAllOf: IsArrayIncludingAllOf = curry(
  <T extends any[]>(allowedValues: T, value: unknown): value is T =>
    isArray(allowedValues) &&
    isArray(value) &&
    every(
      (member): member is T[number] => some(isAsymmetricMatch(member), value),
      allowedValues,
    ),
  2,
);
