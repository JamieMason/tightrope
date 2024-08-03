import { curry } from './lib/curry.js';

type Tap = {
  <T>(fn: (value: T) => void): (value: T) => T;
  <T>(fn: (value: T) => void, value: T): T;
};

/** @tags effect */
export const tap: Tap = curry(function tap<T>(
  fn: (value: T) => void,
  value: T,
): T {
  fn(value);
  return value;
}, 2);
