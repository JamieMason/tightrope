import { curry } from '../fn/lib/curry.js';
import type { Guard } from '../guard/index.js';
import { isNonEmptyArray } from './is-non-empty-array.js';

type IsArrayOf = {
  <Fn extends Guard.Unary>(
    guard: Fn,
  ): (value: unknown) => value is Guard.UnaryType<Fn>[];
  <Fn extends Guard.Unary>(
    guard: Fn,
    value: unknown,
  ): value is Guard.UnaryType<Fn>[];
};

/**
 * Does every value pass the given Guard?
 *
 * ## Examples
 *
 * ```ts
 * isArrayOf(isNonEmptyString, ['click', 'mousedown', 'load']);
 * ```
 *
 * @tags guard, arrays
 */
export const isArrayOf: IsArrayOf = curry(
  <Fn extends Guard.Unary>(
    guard: Fn,
    value: unknown,
  ): value is Guard.UnaryType<Fn>[] =>
    isNonEmptyArray(value) && value.every(value => guard(value)),
  2,
);
