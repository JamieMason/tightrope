import { curry } from '../fn/curry';
import { every } from './every';
import { isArray } from './is-array';
import { isJestEqual } from './is-jest-equal';
import { some } from './some';

type IsArrayIncludingOnly = {
  <T extends any[]>(allowedValues: T): { (value: unknown): boolean };
  <T extends any[]>(allowedValues: T, value: unknown): boolean;
};

/**
 * Asserts that a value is an `Array` including only the values provided in the given `allowedValues` array and no
 * others. The order and number of times each value appears in either array does not matter. Returns true unless `value`
 * contains a value which does not feature in `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingOnly = curry(
  <T extends any[]>(allowedValues: T, value: unknown): value is T =>
    isArray(allowedValues) &&
    isArray(value) &&
    every((member) => some(isJestEqual(member), allowedValues), value),
  2,
);
