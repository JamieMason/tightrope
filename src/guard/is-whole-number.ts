import { isDivisibleBy } from './is-divisible-by';
import { isNumber } from './is-number';

/**
 * Asserts that a value is a `Number` with no positive decimal places.
 *
 * @tags guard, numbers
 */
export const isWholeNumber = (value: unknown): value is number =>
  isNumber(value) && (value === 0 || isDivisibleBy(1, value));
