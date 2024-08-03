import { curry } from '../fn/lib/curry.js';
import { isNonEmptyString } from './is-non-empty-string.js';

type EndsWith = {
  (otherString: unknown): (value: unknown) => value is string;
  (otherString: unknown, value: unknown): value is string;
};

/**
 * Return true if a given value ends with a specific string.
 *
 * @tags guard, strings, string-length, comparator
 */
export const endsWith: EndsWith = curry(
  (otherString: unknown, value: unknown): value is string =>
    isNonEmptyString(value) &&
    isNonEmptyString(otherString) &&
    value.slice(value.length - otherString.length, value.length) ===
      otherString,
  2,
);
