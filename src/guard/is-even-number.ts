import { isDivisibleBy } from './is-divisible-by.js';
import { isNumber } from './is-number.js';

/**
 * Asserts that a value is an even `Number`.
 *
 * @tags guard, numbers
 */
export const isEvenNumber = (value: unknown): value is number =>
  isNumber(value) && isDivisibleBy(2, value);
