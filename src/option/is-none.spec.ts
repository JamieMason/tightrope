import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { isNone } from './is-none.js';

it('positive case - None object', () => {
  expect(isNone(none)).toBe(true);
});

it('negative case - Some object', () => {
  expect(isNone(new Some(false))).toBe(false);
});

it('negative case - non-option object', () => {
  const nonOptionObj = { foo: 'bar' };
  expect(isNone(nonOptionObj)).toBe(false);
});
