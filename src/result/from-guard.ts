import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import type { Guard } from '../guard/index.js';
import type { Result } from './result.js';
import { Err, Ok } from './result.js';

type FromGuard = {
  <
    Fn extends Guard.Unary,
    E = unknown,
    T = Fn extends (value: unknown) => value is infer T ? T : unknown,
  >(
    guard: Fn,
    error: E,
    value: unknown,
  ): Result<T, E>;
  <
    Fn extends Guard.Unary,
    E = unknown,
    T = Fn extends (value: unknown) => value is infer T ? T : unknown,
  >(
    guard: Fn,
    error: E,
  ): (value: unknown) => Result<T, E>;
  <
    Fn extends Guard.Unary,
    _E = unknown,
    _T = Fn extends (value: unknown) => value is infer T ? T : unknown,
  >(
    guard: Fn,
  ): {
    <
      Fn extends Guard.Unary,
      E = unknown,
      T = Fn extends (value: unknown) => value is infer T ? T : unknown,
    >(
      error: E,
    ): (value: unknown) => Result<T, E>;
    <
      Fn extends Guard.Unary,
      E = unknown,
      T = Fn extends (value: unknown) => value is infer T ? T : unknown,
    >(
      error: E,
      value: unknown,
    ): Result<T, E>;
  };
};

/** @tags result, wrap, invoke */
export const fromGuard: FromGuard = curry(
  withSafety(
    <
      Fn extends Guard.Unary,
      E = unknown,
      T = Fn extends (value: unknown) => value is infer T ? T : unknown,
    >(
      guard: Fn,
      error: E,
      value: unknown,
    ): Result<T, E> => (guard(value) ? new Ok<T>(value) : new Err<E>(error)),
  ),
  3,
);
