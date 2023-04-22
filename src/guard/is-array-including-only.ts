import { curry } from '../fn/curry';
import { every } from './every';
import { isArray } from './is-array';
import { isJestEqual } from './is-jest-equal';
import { some } from './some';

type IsArrayIncludingOnly = {
  (allowedValues: unknown[]): { (value: unknown): boolean };
  (allowedValues: unknown[], value: unknown): boolean;
};

/**
 * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no
 * others. The order and number of times each value appears in either array does not matter. Returns true unless `value`
 * contains a value which does not feature in `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingOnly: IsArrayIncludingOnly = curry(
  (allowedValues: unknown[], value: unknown): boolean =>
    isArray(allowedValues) &&
    isArray(value) &&
    every((member) => some(isJestEqual(member), allowedValues), value),
  2,
);
