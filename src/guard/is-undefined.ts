import { hasType } from './has-type.js';

/**
 * Asserts that a value is `undefined`
 *
 * @tags guard, truthiness
 */
export const isUndefined = hasType<undefined>('Undefined');
