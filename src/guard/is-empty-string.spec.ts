import { expect, it } from 'vitest';
import { isEmptyString } from './is-empty-string';

it('positive case - empty string', () => {
  expect(isEmptyString('')).toBe(true);
});

it('negative case - non-empty string', () => {
  expect(isEmptyString('not empty')).toBe(false);
});

it('negative case - non-string value', () => {
  expect(isEmptyString(42)).toBe(false);
});

it('negative case - array', () => {
  expect(isEmptyString([])).toBe(false);
});
