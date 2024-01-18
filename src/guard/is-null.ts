import { hasType } from './has-type.js';

/**
 * Asserts that a value is `null`.
 *
 * @tags guard, truthiness
 */
export const isNull = hasType<null>('Null');
