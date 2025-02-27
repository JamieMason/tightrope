import { curry } from '../fn/lib/curry.js';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to.js';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to.js';

type IsWithinRange = {
  (floor: number, ceiling: number, value: unknown): value is number;
  (floor: number, ceiling: number): (value: unknown) => value is number;
  (
    floor: number,
  ): {
    (ceiling: number): (value: unknown) => value is number;
    (ceiling: number, value: unknown): value is number;
  };
};

/**
 * Asserts that a value is a `Number` which is both greater than or equal to `floor` and less than or equal to
 * `ceiling`.
 *
 * @tags guard, numbers
 */
export const isWithinRange: IsWithinRange = curry(
  (floor: number, ceiling: number, value: unknown): value is number =>
    isLessThanOrEqualTo(ceiling, value) && isGreaterThanOrEqualTo(floor, value),
  3,
);
