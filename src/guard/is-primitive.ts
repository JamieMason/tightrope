import type { JsonArray, JsonObject, JsonValue } from 'type-fest';
import { isBoolean } from './is-boolean';
import { isNil } from './is-nil';
import { isNumber } from './is-number';
import { isString } from './is-string';

type Primitive = null | undefined | number | string | boolean;

/**
 * Return true if value is `null`, `undefined`, `number`, `string`, or `boolean`
 *
 * @tags guard, primitives
 */
export function isPrimitive<T extends null>(value: T): true;
export function isPrimitive<T extends undefined>(value: T): true;
export function isPrimitive<T extends number>(value: T): true;
export function isPrimitive<T extends string>(value: T): true;
export function isPrimitive<T extends boolean>(value: T): true;
export function isPrimitive<T extends JsonObject>(value: T): false;
export function isPrimitive<T extends JsonArray>(value: T): false;
export function isPrimitive(
  value: unknown,
): value is Exclude<JsonValue, JsonObject | JsonArray>;

export function isPrimitive(value: unknown): value is Primitive {
  return isNil(value) || isString(value) || isNumber(value) || isBoolean(value);
}
