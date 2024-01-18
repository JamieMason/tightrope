import type {
  AnyAsymmetricMatcher,
  AsymmetricMatcher,
  AsymmetricMatcherType,
} from '../fn/types.js';
import { isFunction } from './is-function.js';
import { isObject } from './is-object.js';

/** ... */
export function isAsymmetricMatcher(
  value: unknown,
): value is typeof value extends AnyAsymmetricMatcher
  ? AsymmetricMatcherType<typeof value>
  : AsymmetricMatcher<unknown> {
  return isObject(value) && isFunction(value.asymmetricMatch);
}
