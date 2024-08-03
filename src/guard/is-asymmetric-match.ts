import { curry } from '../fn/lib/curry.js';
import {
  type AnyAsymmetricMatcher,
  type AsymmetricMatcherType,
  isAsymmetricMatcher,
} from './is-asymmetric-matcher.js';

type IsAsymmetricMatch = {
  <M extends AnyAsymmetricMatcher>(
    matcher: M,
  ): (value: unknown) => value is AsymmetricMatcherType<M>;
  <M extends AnyAsymmetricMatcher>(
    matcher: M,
    value: unknown,
  ): value is AsymmetricMatcherType<M>;
};

/** Does the given value match the given asymmetric matcher */
export const isAsymmetricMatch: IsAsymmetricMatch = curry(
  <M extends AnyAsymmetricMatcher>(
    matcher: M,
    value: unknown,
  ): value is AsymmetricMatcherType<M> =>
    matcher === value ||
    (isAsymmetricMatcher(matcher) && matcher.asymmetricMatch(value)),
  2,
);
