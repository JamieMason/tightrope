import { Just } from '.';

/**
 * Determines whether a value is an instance of `Just`.
 *
 * @tags maybe, guard
 */
export function isJust<T>(value: unknown): value is Just<T> {
  return value instanceof Just && value._tag === 'Just';
}
