import { hasType } from './has-type';

/**
 * Asserts that a value is `null`.
 *
 * @tags guard, truthiness
 */
export const isNull = hasType<null>('Null');
