import type { Maybe } from '.';
import { nothing, Just } from '.';
import { curry } from '../fn/curry';
import type { UnaryGuard } from '../fn/types';

export type FromGuard = {
  <
    Fn extends UnaryGuard,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    guard: Fn,
  ): { (value: unknown): Maybe<O> };
  <
    Fn extends UnaryGuard,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    guard: Fn,
    value: unknown,
  ): Maybe<O>;
};

/** @tags maybe, wrap, invoke */
export const fromGuard: FromGuard = curry(function fromGuard<
  Fn extends UnaryGuard,
  O = Fn extends (value: any) => value is infer O ? O : never,
>(guard: Fn, value: unknown): Maybe<O> {
  return guard(value) ? new Just<O>(value) : nothing;
}, 2);
