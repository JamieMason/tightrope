import type { nothing } from './Maybe.gen';
import { isObject } from '../guard/is-object';

/**
 * Returns true if the given value is a `Nothing` instance, false otherwise.
 *
 * @tags maybe, guard, errors
 */
export function isNothing(value: unknown): value is typeof nothing {
  return isObject(value) && value._tag === 'Nothing';
}
