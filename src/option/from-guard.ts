import type { Option } from './index.js';
import { none, Some } from './index.js';
import { curry } from '../fn/curry.js';
import type { UnaryGuard } from '../fn/types.js';

export type FromGuard = {
  <
    Fn extends UnaryGuard,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    guard: Fn,
  ): { (value: unknown): Option<O> };
  <
    Fn extends UnaryGuard,
    O = Fn extends (value: any) => value is infer O ? O : never,
  >(
    guard: Fn,
    value: unknown,
  ): Option<O>;
};

/** @tags option, wrap, invoke */
export const fromGuard: FromGuard = curry(function fromGuard<
  Fn extends UnaryGuard,
  O = Fn extends (value: any) => value is infer O ? O : never,
>(guard: Fn, value: unknown): Option<O> {
  return guard(value) ? new Some<O>(value) : none;
}, 2);
