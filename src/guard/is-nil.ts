import { isNull } from './is-null';
import { isUndefined } from './is-undefined';

/**
 * Asserts that a value is `null` or `undefined`
 *
 * @tags guard, truthiness
 */
export const isNil = (value: unknown): value is undefined | null =>
  isNull(value) || isUndefined(value);
