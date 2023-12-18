import { curry } from '../fn/curry';
import { every } from './every';
import { isArray } from './is-array';
import { isJestEqual } from './is-jest-equal';
import { some } from './some';

type IsArrayIncludingAllOf = {
  <T extends any[]>(allowedValues: T): { (value: unknown): value is T };
  <T extends any[]>(allowedValues: T, value: unknown): value is T;
};

/**
 * Asserts that `value` is an `Array` including all of the values provided in `allowedValues`. It could also include
 * additional values or be in a different order, but if every value in `allowedValues` features in `value` then this
 * will return `true`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingAllOf = curry(
  <T extends any[]>(allowedValues: T, value: unknown): boolean =>
    isArray(allowedValues) &&
    isArray(value) &&
    every(
      (member): member is T[number] => some(isJestEqual(member), value),
      allowedValues,
    ),
  2,
) as IsArrayIncludingAllOf;
