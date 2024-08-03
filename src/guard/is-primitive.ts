import { isNumber } from '../number/is-number.js';
import { isString } from '../string/is-string.js';
import { isBoolean } from './is-boolean.js';
import { isNil } from './is-nil.js';

export type Primitive = null | undefined | number | string | boolean;

/**
 * Return true if value is `null`, `undefined`, `number`, `string`, or `boolean`
 *
 * @tags guard, primitives
 */
export function isPrimitive(value: unknown): value is Primitive {
  return isNil(value) || isString(value) || isNumber(value) || isBoolean(value);
}
