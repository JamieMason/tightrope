import type { Option } from '.';
import { none } from '.';
import { curry } from '../fn/curry';
import { isSome } from './is-some';

export type AndThen = {
  <I, O>(
    mapFn: (value: I) => Option<O>,
  ): {
    (option: Option<I>): Option<O>;
  };
  <I, O>(mapFn: (value: I) => Option<O>, option: Option<I>): Option<O>;
};

/**
 * Applies a mapping function to the value of an `Option`, returning a new `Option`. If the input `Option` is `None`,
 * the function immediately returns `None` without calling the mapping function.
 *
 * @tags option, transform, transform-option, right-biased
 */
export const andThen: AndThen = curry(
  <I, O>(mapFn: (value: I) => Option<O>, option: Option<I>): Option<O> =>
    isSome<I>(option) ? mapFn(option.value) : none,
  2,
);
