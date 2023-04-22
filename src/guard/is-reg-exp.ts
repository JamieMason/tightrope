import { hasType } from './has-type';

/**
 * Asserts that a value is a `RegExp`.
 *
 * @tags guard, regexp
 */
export const isRegExp = hasType<RegExp>('RegExp');
