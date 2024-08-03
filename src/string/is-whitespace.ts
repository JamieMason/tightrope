import type { Brand } from 'ts-brand';
import { isString } from './is-string.js';

export type Whitespace = Brand<string, 'Whitespace'>;

const nonWhitespace = /\S/;

/**
 * Asserts that a value is a `String` containing only whitespace characters.
 *
 * @tags guard, strings
 */
export const isWhitespace = (value: unknown): value is Whitespace =>
  isString(value) && value.search(nonWhitespace) === -1;
