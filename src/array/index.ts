export { every } from './every.js';
export { flat } from './flat.js';
export { isArrayIncludingAllOf } from './is-array-including-all-of.js';
export { isArrayIncludingAnyOf } from './is-array-including-any-of.js';
export { isArrayIncludingOnly } from './is-array-including-only.js';
export { isArrayOfBooleans } from './is-array-of-booleans.js';
export { isArrayOfNumbers } from './is-array-of-numbers.js';
export { isArrayOfObjects } from './is-array-of-objects.js';
export { isArrayOfSize } from './is-array-of-size.js';
export { isArrayOfStrings } from './is-array-of-strings.js';
export { isArrayOf } from './is-array-of.js';
export { isArray } from './is-array.js';
export { isEmptyArray } from './is-empty-array.js';
export { isNonEmptyArray } from './is-non-empty-array.js';
export { some } from './some.js';
export { uniq } from './uniq.js';

/** Get type of members of an array */
export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
