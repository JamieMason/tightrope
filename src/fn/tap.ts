import { curry } from './curry';
import type { AnyFn } from './types';

export type Tap = {
  <Fn extends AnyFn>(fn: Fn): { <T>(value: T): T };
  <T, Fn extends AnyFn>(fn: Fn, value: T): T;
};

/** @tags effect */
export const tap: Tap = curry(function tap<T, Fn extends AnyFn>(
  fn: Fn,
  value: T,
): T {
  fn(value);
  return value;
},
2);
