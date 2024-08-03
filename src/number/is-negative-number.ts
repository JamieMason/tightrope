import { isNumber } from './is-number.js';

/**
 * Asserts that a value is a `Number` less than 0.
 *
 * @tags guard, numbers, comparator
 */
export const isNegativeNumber = (value: unknown): value is number =>
  isNumber(value) && value < 0;
