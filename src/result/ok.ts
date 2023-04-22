import type { AnyResult, ResOk } from '../fn/types';
import type { Option } from '../option';
import { none, Some } from '../option';
import { isOk } from './is-ok';

/**
 * Transforms `Result<T, E>` into `Option<T>`, mapping `Ok(v)` to `Some(v)` and `Err(e)` to `None`.
 *
 * @tags result, option, transform, transform-result
 */
export function ok<Res extends AnyResult>(res: Res): Option<ResOk<Res>> {
  return isOk<ResOk<Res>>(res) ? new Some(res.value) : none;
}
