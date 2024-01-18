import { hasType } from './has-type.js';

type IsArray = (
  value: unknown,
) => value is typeof value extends Array<infer V>
  ? unknown extends V
    ? unknown[]
    : V[]
  : unknown[];

/**
 * Asserts that a value is a valid `Array` containing none or any number of items of any type.
 *
 * @tags guard, arrays
 */
export const isArray = hasType<any>('Array') as IsArray;
