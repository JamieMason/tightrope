import type { Brand } from 'ts-brand';
import { isDate } from './is-date.js';

export type ValidDate = Brand<Date, 'ValidDate'>;

/**
 * Asserts that a value is an instance of `Date` whose internal value is valid. `Date` is little like `Promise` in that
 * it is a container for a value. For example, `new Date('wut?')` is a valid `Date` which wraps a value that is not
 * valid.
 *
 * @tags guard, dates
 */
export const isValidDate = (value: unknown): value is ValidDate =>
  isDate(value) && !Number.isNaN(value.getTime());
