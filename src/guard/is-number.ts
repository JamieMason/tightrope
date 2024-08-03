import { hasType } from './has-type.js';

/**
 * Asserts that a value is a valid `Number` or `new Number()` and not `NaN`.
 *
 * @tags guard, numbers
 */
export const isNumber = (value: unknown): value is number =>
  hasType<number>('Number')(value) &&
  !Number.isNaN(Number.parseFloat(String(value)));
