import { curry } from '../fn/curry.js';
import type { AnyFn, AnyResult } from '../fn/types.js';
import { isOk } from './is-ok.js';
import { withCatch } from './lib/with-catch.js';

export type Tap = {
  <Fn extends AnyFn>(fn: Fn): <T extends AnyResult>(value: T) => T;
  <Fn extends AnyFn, T extends AnyResult>(fn: Fn, value: T): T;
};

/** @tags effect */
export const tap: Tap = curry(
  withCatch(function tap<Fn extends AnyFn, T extends AnyResult>(
    fn: Fn,
    res: T,
  ): T {
    if (isOk(res)) fn(res.value);
    return res;
  }),
  2,
);
