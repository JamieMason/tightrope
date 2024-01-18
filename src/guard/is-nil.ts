import { isNull } from './is-null.js';
import { isUndefined } from './is-undefined.js';

/**
 * Asserts that a value is `null` or `undefined`
 *
 * @tags guard, truthiness
 */
export const isNil = (value: unknown): value is undefined | null =>
  isNull(value) || isUndefined(value);
