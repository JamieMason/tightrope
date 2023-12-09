import type { Option } from '.';
import { none, Some } from '.';
import { curry } from '../fn/curry';
import type { UnaryGuard } from '../fn/types';

export type FromGuard = {
  <SomeT, Fn extends UnaryGuard<any>>(
    guard: Fn,
  ): {
    (value: SomeT): Option<SomeT>;
  };
  <SomeT, Fn extends UnaryGuard<any>>(guard: Fn, value: SomeT): Option<SomeT>;
};

/** @tags option, wrap, invoke */
export const fromGuard: FromGuard = curry(function fromGuard<
  SomeT,
  Fn extends UnaryGuard<any>,
>(guard: Fn, value: SomeT): Option<SomeT> {
  return guard(value) ? new Some<SomeT>(value) : none;
}, 2);
