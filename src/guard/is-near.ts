import { curry } from '../fn/curry.js';
import { isWithinRange } from './is-within-range.js';

type IsNear = {
  (otherNumber: number, epsilon: number, value: any): boolean;
  (otherNumber: number, epsilon: number): (value: any) => boolean;
  (
    otherNumber: number,
  ): {
    (epsilon: number): (value: any) => boolean;
    (epsilon: number, value: any): boolean;
  };
};

/**
 * Asserts that a value is a number within the given acceptable distance from another.
 *
 * @tags guard, numbers, comparator
 */
export const isNear: IsNear = curry(
  (otherNumber: number, epsilon: number, value: any): value is number =>
    isWithinRange(otherNumber - epsilon, otherNumber + epsilon, value),
  3,
);
