import { curry } from '../fn/lib/curry.js';
import { withSafety } from '../fn/with-safety.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

type Tap = {
  <Res extends Result.Any>(
    fn: (value: Result.OkType<Res>) => void,
  ): (res: Res) => Res;
  <Res extends Result.Any>(
    fn: (value: Result.OkType<Res>) => void,
    res: Res,
  ): Res;
};

/**
 * Execute a side effect on the value of an `Ok` or skip if an `Err`.
 *
 * @tags effect
 */
export const tap: Tap = curry(
  withSafety(
    <Res extends Result.Any>(
      fn: (value: Result.OkType<Res>) => void,
      res: Res,
    ): Res => {
      if (isOk(res)) fn(res.value);
      return res;
    },
  ),
  2,
);
