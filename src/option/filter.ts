import type { Option } from '.';
import { none } from '.';
import { curry } from '../fn/curry';
import { isSome } from './is-some';

export type Filter = {
  <I>(predicate: (value: I) => boolean): { (opt: Option<I>): Option<I> };
  <I>(predicate: (value: I) => boolean, opt: Option<I>): Option<I>;
};

type GuardType<I> = I extends (x: any, ...rest: any) => x is infer U
  ? U
  : never;

/**
 * Calls the provided predicate function on the contained value I if the `Option` is `Some(I)`, and returns `Some(I)` if
 * the function returns `true`; otherwise, returns `None`
 *
 * @tags option, filter, right-biased
 */
export const filter = curry(
  <Fn extends (value: any) => value is O, O>(
    predicate: Fn,
    opt: Option<GuardType<Fn>>,
  ): Option<O> => (isSome<O>(opt) && predicate(opt.value) ? opt : none),
  2,
);

// GuardType<typeof predicate>
/*: Filter*/
