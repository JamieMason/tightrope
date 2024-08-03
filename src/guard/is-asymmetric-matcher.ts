import { isFunction } from '../fn/is-function.js';
import { isObject } from '../object/is-object.js';

export type AnyAsymmetricMatcher = AsymmetricMatcher<any>;

/** A Jasmine-like asymmetric matcher */
export type AsymmetricMatcher<T> = {
  asymmetricMatch(value: unknown): value is T;
};

/** Get type of a Jasmine-like asymmetric matcher */
export type AsymmetricMatcherType<T> = T extends {
  asymmetricMatch(value: any): value is infer V;
}
  ? V
  : never;

/** ... */
export function isAsymmetricMatcher(
  value: unknown,
): value is typeof value extends AsymmetricMatcher<any>
  ? AsymmetricMatcherType<typeof value>
  : AsymmetricMatcher<unknown> {
  return isObject(value) && isFunction(value.asymmetricMatch);
}
