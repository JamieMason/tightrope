import { expect, it } from 'vitest';
import { isEmptyObject } from './is-empty-object';

it('positive case - empty object', () => {
  expect(isEmptyObject({})).toBe(true);
});

it('negative case - non-empty object', () => {
  expect(isEmptyObject({ key: 'value' })).toBe(false);
});

it('negative case - non-object value', () => {
  expect(isEmptyObject('not an object')).toBe(false);
});

it('negative case - array', () => {
  expect(isEmptyObject([])).toBe(false);
});
