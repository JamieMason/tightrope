import { isDivisibleBy } from './is-divisible-by.js';
import { isNumber } from './is-number.js';

/**
 * Asserts that a value is an odd `Number`.
 *
 * @tags guard, numbers
 */
export const isOddNumber = (value: unknown): value is number =>
  isNumber(value) && !isDivisibleBy(2, value);
