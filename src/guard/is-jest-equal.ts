import { curry } from '../fn/curry';
import { isAsymmetricMatcher } from './is-asymmetric-matcher';

type IsJestEqual = {
  <T>(value: T): { (other: unknown): boolean };
  <T>(value: T, other: unknown): boolean;
};

/** ... */
export const isJestEqual: IsJestEqual = curry(
  <T>(value: T, other: unknown): other is T =>
    value === other ||
    (isAsymmetricMatcher(value) && value.asymmetricMatch(other)) ||
    (isAsymmetricMatcher(other) && other.asymmetricMatch(value)),
  2,
);
