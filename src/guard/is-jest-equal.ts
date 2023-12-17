import { curry } from '../fn/curry';
import type { AsymmetricMatcher } from '../fn/types';
import { isAsymmetricMatcher } from './is-asymmetric-matcher';

/** ... */
export const isJestEqual = curry(
  (
    other: unknown,
    value: unknown,
  ): value is typeof other extends AsymmetricMatcher<infer T>
    ? T
    : typeof other =>
    other === value ||
    (isAsymmetricMatcher(other) && other.asymmetricMatch(value)),
  2,
);
