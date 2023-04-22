import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

/**
 * Asserts that a value is an even `Number`.
 *
 * @tags guard, numbers
 */
export const isEvenNumber = (value: unknown): value is number =>
  isNumber(value) && isDivisibleBy(2, value);
