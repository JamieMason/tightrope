import { just } from './Maybe.gen';

/**
 * Determines whether a value is an instance of `Just`.
 *
 * @tags maybe, guard
 */
export function isJust<T>(value: unknown): value is just<T> {
  return value instanceof just && value._tag === 'Just';
}
