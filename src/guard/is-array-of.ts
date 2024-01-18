import { curry } from '../fn/curry.js';
import type { UnaryGuard } from '../fn/types.js';
import { isNonEmptyArray } from './is-non-empty-array.js';

type IsArrayOf = {
  (guard: UnaryGuard): { (values: unknown): boolean };
  (guard: UnaryGuard, values: unknown): boolean;
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
  (guard: UnaryGuard, values: unknown) =>
    isNonEmptyArray(values) && values.every((value) => guard(value)),
  2,
);
