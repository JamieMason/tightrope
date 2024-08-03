import type { Brand } from 'ts-brand';
import { isString } from './is-string.js';

export type VisibleString = Brand<string, 'VisibleString'>;

const nonWhitespace = /\S/;

/**
 * Asserts that a value is a valid `String` containing at least one character which is not whitespace.
 *
 * @tags guard, strings
 */
export const isVisibleString = (value: unknown): value is VisibleString =>
  isString(value) && value.length > 0 && value.search(nonWhitespace) !== -1;
