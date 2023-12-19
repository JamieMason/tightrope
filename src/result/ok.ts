import type { AnyResult, ResOk } from '../fn/types';
import type { maybe } from '../maybe/Maybe.gen';
import { nothing, just } from '../maybe/Maybe.gen';
import { isOk } from './is-ok';

/**
 * Transforms `Result<T, E>` into `Maybe<T>`, mapping `Ok(v)` to `Just(v)` and `Err(e)` to `Nothing`.
 *
 * @tags result, maybe, transform, transform-result
 */
export function ok<Res extends AnyResult>(res: Res): maybe<ResOk<Res>> {
  return isOk<ResOk<Res>>(res) ? just(res.value) : nothing;
}
