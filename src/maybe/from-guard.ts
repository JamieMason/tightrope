import type { maybe } from './Maybe.gen';
import { nothing, just } from './Maybe.gen';
import { curry } from '../fn/curry';
import type { UnaryGuard } from '../fn/types';

export type FromGuard = {
  <
    Fn extends UnaryGuard,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    guard: Fn,
  ): { (value: unknown): maybe<O> };
  <
    Fn extends UnaryGuard,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    guard: Fn,
    value: unknown,
  ): maybe<O>;
};

/** @tags maybe, wrap, invoke */
export const fromGuard: FromGuard = curry(function fromGuard<
  Fn extends UnaryGuard,
  O = Fn extends (value: any) => value is infer O ? O : never,
>(guard: Fn, value: unknown): maybe<O> {
  return guard(value) ? new just<O>(value) : nothing;
}, 2);
