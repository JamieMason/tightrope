import type { Brand } from 'ts-brand';
import { isString } from './is-string.js';

export type NonEmptyString = Brand<string, 'NonEmptyString'>;

/**
 * Asserts that a value is a valid `String` containing at least one character.
 *
 * @tags guard, strings, emptiness, truthiness
 */
export const isNonEmptyString = (value: unknown): value is NonEmptyString =>
  isString(value) && value.length > 0;
