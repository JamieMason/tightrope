import { expect, it } from 'vitest';
import { isNonEmptyObject } from './is-non-empty-object.js';

it('positive case', () => {
  expect(isNonEmptyObject({ foo: 'bar' })).toBe(true);
});

it('negative case - empty object', () => {
  expect(isNonEmptyObject({})).toBe(false);
});

it('negative case - non-object', () => {
  expect(isNonEmptyObject('foo')).toBe(false);
  expect(isNonEmptyObject(null)).toBe(false);
});
