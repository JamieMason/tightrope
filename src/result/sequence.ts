import type { Result } from './index.js';
import { Ok } from './index.js';
import type { AnyResult, ResErr, ResOk } from '../fn/types.js';
import { isOk } from './is-ok.js';

/**
 * Takes an array of `Result` values and returns a `Result` containing an array of `Ok` values if all the input values
 * are `Ok`. If any input value is an `Err`, returns the first encountered `Err`.
 *
 * @tags result, array
 */
export function sequence<Res extends AnyResult>(
  results: Res[],
): Result<ResOk<Res>[], ResErr<Res>> {
  const okValues: ResOk<Res>[] = [];
  for (const result of results) {
    if (isOk<ResOk<Res>>(result)) {
      okValues.push(result.value);
    } else {
      return result;
    }
  }
  return new Ok(okValues);
}
