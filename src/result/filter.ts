import type { Result } from '.';
import { Err } from '.';
import { curry } from '../fn/curry';
import type { AnyResult, GuardType, UnaryGuard } from '../fn/types';
import { isOk } from './is-ok';
import { withCatch } from './lib/with-catch';

export type Filter = {
  <G extends UnaryGuard, Res extends AnyResult>(
    guard: G,
    msg: string,
    res: Res,
  ): Result<GuardType<G>, Error>;
  <G extends UnaryGuard>(guard: G, msg: string): {
    <Res extends AnyResult>(res: Res): Result<GuardType<G>, Error>;
  };
  <G extends UnaryGuard>(guard: G): {
    (msg: string): {
      <Res extends AnyResult>(res: Res): Result<GuardType<G>, Error>;
    };
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
