import type { Brand } from 'ts-brand';
import { isDivisibleBy } from './is-divisible-by.js';
import { isNumber } from './is-number.js';

export type WholeNumber = Brand<number, 'WholeNumber'>;

/**
 * Asserts that a value is a `Number` with no positive decimal places, both `10`
 * and `10.0` are considered whole numbers.
 *
 * @tags guard, numbers
 */
export const isWholeNumber = (value: unknown): value is WholeNumber =>
  isNumber(value) && (value === 0 || isDivisibleBy(1, value));
