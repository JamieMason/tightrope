import { curry } from '../fn/curry';
import type { AsymmetricMatcher } from '../fn/types';
import { isAsymmetricMatcher } from './is-asymmetric-matcher';

export type IsJestEqual = {
  <T>(other: T): {
    (
      value: unknown,
    ): value is typeof other extends AsymmetricMatcher<infer T>
      ? T
      : typeof other;
  };
  <T>(
    other: T,
    value: unknown,
  ): value is typeof other extends AsymmetricMatcher<infer T>
    ? T
    : typeof other;
};

/** ... */
export const isJestEqual = curry(
  <T>(
    other: T,
    value: unknown,
  ): value is typeof other extends AsymmetricMatcher<infer T>
    ? T
    : typeof other =>
    other === value ||
    (isAsymmetricMatcher(other) && other.asymmetricMatch(value)),
  2,
) as IsJestEqual;
