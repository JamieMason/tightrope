import { hasType } from './has-type';

/**
 * Asserts that a value is a valid `Array` containing none or any number of items of any type.
 *
 * @tags guard, arrays
 */
export const isArray = hasType<any[]>('Array');
