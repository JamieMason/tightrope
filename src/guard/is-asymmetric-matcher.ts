import type {
  AnyAsymmetricMatcher,
  AsymmetricMatcher,
  AsymmetricMatcherType,
} from '../fn/types';
import { isFunction } from './is-function';
import { isObject } from './is-object';

/** ... */
export function isAsymmetricMatcher(
  value: unknown,
): value is typeof value extends AnyAsymmetricMatcher
  ? AsymmetricMatcherType<typeof value>
  : AsymmetricMatcher<unknown> {
  return isObject(value) && isFunction(value.asymmetricMatch);
}
