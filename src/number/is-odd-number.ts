import type { Brand } from 'ts-brand';
import { isDivisibleBy } from './is-divisible-by.js';
import { isNumber } from './is-number.js';

export type OddNumber = Brand<number, 'OddNumber'>;

/**
 * Asserts that a value is an odd `Number`.
 *
 * @tags guard, numbers
 */
export const isOddNumber = (value: unknown): value is OddNumber =>
  isNumber(value) && !isDivisibleBy(2, value);
