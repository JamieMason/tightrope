import { curry } from '../fn/lib/curry.js';
import { isString } from '../string/is-string.js';

type HasProperty = {
  (ownKeyName: string): (value: unknown) => boolean;
  (ownKeyName: string, value: unknown): boolean;
};

/**
 * Returns true if a value has a property of the given name, even if the value of that property is `undefined`.
 *
 * This assertion describes the shape of the given value. For example, value.prop is `undefined` in both of the
 * following scenarios, but `{ prop: undefined }` and `{ }` do not have the same shape.
 *
 * @tags guard, objects, arrays
 */
export const hasProperty: HasProperty = curry(
  (ownKeyName: string, value: unknown): boolean =>
    Boolean(
      isString(ownKeyName) &&
        value &&
        typeof value === 'object' &&
        ownKeyName in value,
    ),
  2,
);
