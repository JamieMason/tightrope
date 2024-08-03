import type { Brand } from 'ts-brand';
import { isNumber } from './is-number.js';

export type PositiveNumber = Brand<number, 'PositiveNumber'>;

/**
 * Asserts that a value is a `Number` greater than 0.
 *
 * @tags guard, numbers
 */
export const isPositiveNumber = (value: unknown): value is PositiveNumber =>
  isNumber(value) && value > 0;
