export { hasProperty } from './has-property.js';
export { hasType } from './has-type.js';
export { isAsymmetricMatch } from './is-asymmetric-match.js';
export { isAsymmetricMatcher } from './is-asymmetric-matcher.js';
export { isBoolean } from './is-boolean.js';
export { isFalse } from './is-false.js';
export { isNil } from './is-nil.js';
export { isPrimitive } from './is-primitive.js';
export { isReadable } from './is-readable.js';
export { isRegExp } from './is-reg-exp.js';
export { isTrue } from './is-true.js';
export { isTruthy } from './is-truthy.js';
export { isUndefined } from './is-undefined.js';
export { is } from './is.js';

export namespace Guard {
  /** A guard/isFoo function which accepts one argument */
  export type Unary = (value: any) => value is any;

  /** Get type of a type guard if it passes */
  export type UnaryType<Fn> = Fn extends (value: any) => value is infer T
    ? T
    : unknown;
}
