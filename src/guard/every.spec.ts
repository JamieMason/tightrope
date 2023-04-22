import { expect, it } from 'vitest';
import { every } from './every';
import { isString } from './is-string';

it('positive case', () => {
  expect(every(isString, ['foo', 'bar', 'baz'])).toBe(true);
});

it('negative case', () => {
  expect(every(isString, ['foo', 'bar', 42])).toBe(false);
});

it('empty array', () => {
  expect(every(isString, [])).toBe(false);
});

it('non-array input', () => {
  expect(every(isString, 'test')).toBe(false);
});
