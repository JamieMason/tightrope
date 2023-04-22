import { hasType } from './has-type';

/**
 * Asserts that a value is a valid `Number` or `new Number()` and not `NaN`.
 *
 * @tags guard, numbers
 */
export const isNumber = (value: unknown): value is number =>
  hasType<number>('Number')(value) && !isNaN(parseFloat(String(value)));
