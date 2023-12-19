import type { Nothing } from '.';
import { isObject } from '../guard/is-object';

/**
 * Returns true if the given value is a `Nothing` instance, false otherwise.
 *
 * @tags maybe, guard, errors
 */
export function isNothing(value: unknown): value is Nothing {
  return isObject(value) && value._tag === 'Nothing';
}
