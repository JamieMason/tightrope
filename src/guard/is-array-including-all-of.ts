import { curry } from '../fn/curry';
import { every } from './every';
import { isArray } from './is-array';
import { isJestEqual } from './is-jest-equal';
import { some } from './some';

type IsArrayIncludingAllOf = {
  (requiredValues: unknown[]): { (value: unknown): boolean };
  (requiredValues: unknown[], value: unknown): boolean;
};

/**
 * Asserts that `value` is an `Array` including all of the values provided in `requiredValues`. It could also include
 * additional values or be in a different order, but if every value in `requiredValues` features in `value` then this
 * will return `true`.
 *
 * @tags guard, arrays, multiple-conditions
 */
export const isArrayIncludingAllOf: IsArrayIncludingAllOf = curry(
  <A extends any[]>(requiredValues: A, value: unknown): boolean =>
    isArray(requiredValues) &&
    isArray(value) &&
    every(
      (requiredValue) => some(isJestEqual(requiredValue), value),
      requiredValues,
    ),
  2,
);
