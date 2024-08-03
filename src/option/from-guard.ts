import { curry } from '../fn/lib/curry.js';
import type { Guard } from '../guard/index.js';
import type { Option } from './option.js';
import { Some, none } from './option.js';

type FromGuard = {
  <Fn extends Guard.Unary, T = Guard.UnaryType<Fn>>(
    guard: Fn,
  ): (value: unknown) => Option<T>;
  <Fn extends Guard.Unary, T = Guard.UnaryType<Fn>>(
    guard: Fn,
    value: unknown,
  ): Option<T>;
};

/** @tags option, wrap, invoke */
export const fromGuard: FromGuard = curry(
  <Fn extends Guard.Unary, T = Guard.UnaryType<Fn>>(
    guard: Fn,
    value: unknown,
  ): Option<T> => (guard(value) ? Some.create(value) : none),
  2,
);
