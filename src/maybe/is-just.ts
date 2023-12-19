import { isObject } from '../guard/is-object';
import { type just } from './Maybe.gen';

/**
 * Determines whether a value is an instance of `Just`.
 *
 * @tags maybe, guard
 */
export function isJust<T>(value: unknown): value is typeof just<T> {
  return isObject(value) && value?.TAG === 'Just';
}
