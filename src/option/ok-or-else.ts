import { curry } from '../fn/lib/curry.js';
import type { Result } from '../result/result.js';
import { Err, Ok } from '../result/result.js';
import { isSome } from './is-some.js';
import type { Option } from './option.js';

type OkOrElse = {
  <Opt extends Option.Any, E>(
    orElseFn: () => E,
  ): (option: Opt) => Result<Option.Type<Opt>, E>;
  <Opt extends Option.Any, E>(
    orElseFn: () => E,
    option: Opt,
  ): Result<Option.Type<Opt>, E>;
};

/**
 * Transforms an `Option` to a `Result`. A `Some(v)` becomes `Ok(v)` and `None` becomes `Err` using the provided
 * function.
 *
 * @tags option, transform, result
 * @see https://doc.rust-lang.org/std/option/enum.Option.html#method.ok_or_else
 */
export const okOrElse: OkOrElse = curry(
  <Opt extends Option.Any, E>(
    orElseFn: () => E,
    option: Opt,
  ): Result<Option.Type<Opt>, E> =>
    isSome(option) ? new Ok(option.value) : new Err(orElseFn()),
  2,
);
