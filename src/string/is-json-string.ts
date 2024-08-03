import type { Brand } from 'ts-brand';
import { isCalculable } from '../number/is-calculable.js';
import { isString } from './is-string.js';

export type JsonString = Brand<string, 'JsonString'>;

/**
 * Asserts that a value is a `String` of valid JSON.
 *
 * @tags guard, strings, JSON
 */
export const isJsonString = (value: unknown): value is JsonString => {
  try {
    return (
      value === 'null' ||
      (isString(value) && (isCalculable(value) || JSON.parse(value) !== null))
    );
  } catch (_err) {
    return false;
  }
};
