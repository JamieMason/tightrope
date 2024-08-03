import { isOk } from './is-ok.js';
import type { Result } from './result.js';
import { Ok } from './result.js';

/**
 * Takes an array of `Result` values and returns a `Result` containing an array
 * of values if all Results are `Ok`. If any input value is an `Err`, returns
 * the first encountered `Err`.
 *
 * @tags result, array
 */
export function sequence<ResArr extends Result.Any[]>(
  results: ResArr,
): Result<Result.OkType<ResArr[number]>[], Result.ErrType<ResArr[number]>> {
  const okValues: Result.OkType<ResArr[number]>[] = [];
  for (const result of results) {
    if (isOk(result)) {
      okValues.push(result.value);
    } else {
      return result;
    }
  }
  return new Ok(okValues);
}
