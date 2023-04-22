import type { Result } from '.';
import { Err, Ok } from '.';
import { curry } from '../fn/curry';
import type { UnaryGuard } from '../fn/types';
import { withCatch } from './lib/with-catch';

export type FromGuard = {
  <OkT, ErrT, Fn extends UnaryGuard<any>>(
    guard: Fn,
    error: ErrT,
    value: OkT,
  ): Result<OkT, ErrT>;
  <OkT, ErrT, Fn extends UnaryGuard<any>>(guard: Fn, error: ErrT): {
    (value: OkT): Result<OkT, ErrT>;
  };
  <Fn extends UnaryGuard<any>>(guard: Fn): {
    <OkT, ErrT>(error: ErrT): {
      (value: OkT): Result<OkT, ErrT>;
    };
    <OkT, ErrT>(error: ErrT, value: OkT): Result<OkT, ErrT>;
  };
};

/** @tags result, wrap, invoke */
export const fromGuard: FromGuard = curry(
  withCatch(function fromGuard<OkT, ErrT, Fn extends UnaryGuard<any>>(
    guard: Fn,
    error: ErrT,
    value: OkT,
  ): Result<OkT, ErrT> {
    return guard(value) ? new Ok<OkT>(value) : new Err<ErrT>(error);
  }),
  3,
);
