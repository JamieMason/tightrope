import { isArrayOf } from './is-array-of.js';

/**
 * Return true if `value` is a non-empty array and every member passes the given guard.
 *
 * @tags guard, multiple-conditions
 */
export const every = isArrayOf;
