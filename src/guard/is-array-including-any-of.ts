import { curry } from '../fn/curry';
import { isArray } from './is-array';
import { isJestEqual } from './is-jest-equal';
import { some } from './some';

type IsArrayIncludingAnyOf = {
  (allowedValues: unknown[]): { (value: unknown): boolean };
  (allowedValues: unknown[], value: unknown): boolean;
};

/**
 * Asserts that `value` is an `Array` including at least one of the members of `allowedValues`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingAnyOf: IsArrayIncludingAnyOf = curry(
  (allowedValues: unknown[], value: unknown): boolean =>
    isArray(allowedValues) &&
    isArray(value) &&
    some(
      (allowedValue: unknown) => some(isJestEqual(allowedValue), value),
      allowedValues,
    ),
  2,
);
