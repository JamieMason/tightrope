import { curry } from '../fn/curry';
import { isNonEmptyString } from './is-non-empty-string';

type StartsWith = {
  (otherString: string): { (value: unknown): boolean };
  (otherString: string, value: unknown): boolean;
};

/**
 * Asserts that value is a string whose trailing characters are equal to those of the provided string.
 *
 * @tags guard, strings, string-length, comparator
 */
export const startsWith: StartsWith = curry(
  (otherString: string, value: unknown): value is string =>
    isNonEmptyString(value) &&
    isNonEmptyString(otherString) &&
    value.slice(0, otherString.length) === otherString,
  2,
);
