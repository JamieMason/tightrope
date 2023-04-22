import { hasType } from './has-type';

/**
 * Asserts that a value is a `String` or `new String()`.
 *
 * @tags guard, strings
 */
export const isString = hasType<string>('String');
