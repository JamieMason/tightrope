import { curry } from '../fn/lib/curry.js';
import { isAsymmetricMatch } from '../guard/is-asymmetric-match.js';
import { every } from './every.js';
import { isNonEmptyArray } from './is-non-empty-array.js';
import { some } from './some.js';

type IsArrayIncludingOnly = {
  <T extends any[]>(allowedValues: T): (value: unknown) => value is T;
  <T extends any[]>(allowedValues: T, value: unknown): value is T;
};

/**
 * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no
 * others. The order and number of times each value appears in either array does not matter. Returns true unless `value`
 * contains a value which does not feature in `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingOnly: IsArrayIncludingOnly = curry(
  <T extends any[]>(allowedValues: T, value: unknown): value is T =>
    isNonEmptyArray(allowedValues) &&
    every(
      (member): member is T[number] =>
        some(isAsymmetricMatch(member), allowedValues),
      value,
    ),
  2,
);
