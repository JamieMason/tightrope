import { curry } from '../fn/curry.js';
import type { AnyResult, GuardType, UnaryGuard } from '../fn/types.js';
import type { Result } from './index.js';
import { Err } from './index.js';
import { isOk } from './is-ok.js';
import { withCatch } from './lib/with-catch.js';

export type Filter = {
  <G extends UnaryGuard, Res extends AnyResult>(
    guard: G,
    msg: string,
    res: Res,
  ): Result<GuardType<G>, Error>;
  <G extends UnaryGuard>(
    guard: G,
    msg: string,
  ): <Res extends AnyResult>(res: Res) => Result<GuardType<G>, Error>;
  <G extends UnaryGuard>(
    guard: G,
  ): {
    (
      msg: string,
    ): <Res extends AnyResult>(res: Res) => Result<GuardType<G>, Error>;
    <Res extends AnyResult>(msg: string, res: Res): Result<GuardType<G>, Error>;
  };
};

/** @tags result, right-biased */
export const filter: Filter = curry(
  withCatch(
    <G extends UnaryGuard, Res extends AnyResult>(
      guard: G,
      msg: string,
      res: Res,
    ): Result<GuardType<G>, Error> => {
      if (isOk<GuardType<G>>(res) && guard(res.value)) return res;
      return new Err(new Error(`${msg}: ${res.value}`));
    },
  ),
  3,
);
