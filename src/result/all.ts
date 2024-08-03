import { isOk } from './is-ok.js';
import type { Result } from './result.js';
import { Err, Ok } from './result.js';

/**
 * Takes an array of `Result` values and returns a `Result` containing an array of `Ok` values if all input values are
 * `Ok`. If any input value is an `Err`, returns an `Err` containing an array of all encountered `Err` values.
 *
 * @tags result, array
 */
export function all<ResArr extends Result.Any[]>(
  results: ResArr,
): Result<Result.OkType<ResArr[number]>[], Result.ErrType<ResArr[number]>[]> {
  const okValues: Result.OkType<ResArr[number]>[] = [];
  const errValues: Result.ErrType<ResArr[number]>[] = [];

  for (const result of results) {
    if (isOk(result)) {
      okValues.push(result.value);
    } else {
      errValues.push(result.value);
    }
  }

  return errValues.length > 0 ? new Err(errValues) : new Ok(okValues);
}
