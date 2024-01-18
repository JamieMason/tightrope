import { Some } from './index.js';

/**
 * Determines whether a value is an instance of `Some`.
 *
 * @tags option, guard
 */
export function isSome<T>(value: unknown): value is Some<T> {
  return value instanceof Some && value._tag === 'Some';
}
