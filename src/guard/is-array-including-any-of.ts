import { curry } from '../fn/curry.js';
import { isArray } from './is-array.js';
import { isJestEqual } from './is-jest-equal.js';
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
export const isArrayIncludingAnyOf = curry(
  <T extends any[]>(allowedValues: T, value: unknown): value is T =>
    isArray(allowedValues) &&
    isArray(value) &&
    some(
      (member): member is T[number] => some(isJestEqual(member), value),
      allowedValues,
    ),
  2,
) as IsArrayIncludingAnyOf;
