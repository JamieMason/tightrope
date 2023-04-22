import { isNumber } from './is-number';

/**
 * Asserts that a value is a `Number` with positive decimal places.
 *
 * @tags guard, numbers
 */
export const isDecimalNumber = (value: unknown): value is number =>
  isNumber(value) && String(value).indexOf('.') !== -1;
