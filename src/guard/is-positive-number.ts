import { isNumber } from './is-number.js';

/**
 * Asserts that a value is a `Number` greater than 0.
 *
 * @tags guard, numbers
 */
export const isPositiveNumber = (value: unknown): value is number =>
  isNumber(value) && value > 0;
