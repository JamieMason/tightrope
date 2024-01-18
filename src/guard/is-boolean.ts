import { hasType } from './has-type.js';

/**
 * Asserts that a value is `true`, `false`, `new Boolean(true)`, or `new Boolean(false)`.
 *
 * @tags guard, booleans
 */
export const isBoolean = hasType<boolean>('Boolean');
