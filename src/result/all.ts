import type { Result } from '.';
import { Err, Ok } from '.';
import { isOk } from './is-ok';

/**
 * Takes an array of `Result` values and returns a `Result` containing an array of `Ok` values if all input values are
 * `Ok`. If any input value is an `Err`, returns an `Err` containing an array of all encountered `Err` values.
 *
 * @tags result, array
 */
export function all<OkT, ErrT>(
  results: Result<OkT, ErrT>[],
): Result<OkT[], ErrT[]> {
  const okValues: OkT[] = [];
  const errValues: ErrT[] = [];

  for (const result of results) {
    if (isOk(result)) {
      okValues.push(result.value);
    } else {
      errValues.push(result.value);
    }
  }

  return errValues.length > 0 ? new Err(errValues) : new Ok(okValues);
}
