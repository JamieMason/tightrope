import type { LazyValue } from '../fn/index.js';
import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import type { Guard } from '../guard/index.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';
import { Err } from './result.js';

type Filter = {
  <Res extends Result.Any, Fn extends Guard.Unary, GetErr extends LazyValue>(
    guard: Fn,
    getErrValue: GetErr,
    res: Res,
  ): Result<Guard.UnaryType<Fn>, Error>;
  <Res extends Result.Any, Fn extends Guard.Unary, GetErr extends LazyValue>(
    guard: Fn,
    getErrValue: GetErr,
  ): (res: Res) => Result<Guard.UnaryType<Fn>, Error>;
  <_Res extends Result.Any, Fn extends Guard.Unary, _GetErr extends LazyValue>(
    guard: Fn,
  ): {
    <Res extends Result.Any, Fn extends Guard.Unary, GetErr extends LazyValue>(
      getErrValue: GetErr,
    ): (res: Res) => Result<Guard.UnaryType<Fn>, Error>;
    <Res extends Result.Any, Fn extends Guard.Unary, GetErr extends LazyValue>(
      getErrValue: GetErr,
      res: Res,
    ): Result<Guard.UnaryType<Fn>, Error>;
  };
};

/**
 * Keep an `Ok` if its value passes the guard function, or return an `Err`
 * containing the result of `getErrValue()`.
 *
 * @tags result, right-biased
 */
export const filter: Filter = curry(
  withSafety(
    <Res extends Result.Any, Fn extends Guard.Unary, GetErr extends LazyValue>(
      guard: Fn,
      getErrValue: GetErr,
      res: Res,
    ): Result<Guard.UnaryType<Fn>, Error> => {
      if (isOk(res) && guard(res.value)) return res;
      return new Err(getErrValue());
    },
  ),
  3,
);
