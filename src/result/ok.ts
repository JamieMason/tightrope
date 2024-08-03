import type { Option } from '../option/option.js';
import { Some, none } from '../option/option.js';
import { isOk } from './is-ok.js';
import type { Result } from './result.js';

/**
 * Transforms `Result<T, E>` into `Option<T>`, mapping `Ok(v)` to `Some(v)` and `Err(e)` to `None`.
 *
 * @tags result, option, transform, transform-result
 */
export function ok<Res extends Result.Any>(
  res: Res,
): Option<Result.OkType<Res>> {
  return isOk(res) ? Some.create(res.value) : none;
}
