import { hasType } from './has-type.js';

/**
 * Asserts that a value is an instance of `Date`.
 *
 * @tags guard, dates
 */
export const isDate = hasType<Date>('Date');
