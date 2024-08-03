import { curry } from '../fn/lib/curry.js';
import type { Result } from '../result/result.js';
import { Err, Ok } from '../result/result.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type OkOr = {
  <Opt extends Option.Any, E>(
    defaultErr: E,
  ): (option: Opt) => Result<Option.Type<Opt>, E>;
  <Opt extends Option.Any, E>(
    defaultErr: E,
    option: Opt,
  ): Result<Option.Type<Opt>, E>;
};

/**
 * Transforms `Some(v)` to `Ok(v)`, and `None` to a value of `Err` using the provided default error value.
 *
 * @tags option, transform, transform-option, right-biased, unwrap, result
 * @see https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or
 */
export const okOr: OkOr = curry(
  <Opt extends Option.Any, E>(
    defaultErr: E,
    option: Opt,
  ): Result<Option.Type<Opt>, E> =>
    isSome(option) ? new Ok(option.value) : new Err(defaultErr),
  2,
);
