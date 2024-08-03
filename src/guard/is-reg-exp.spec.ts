import { expect, test } from 'vitest';
import { isRegExp } from './is-reg-exp.js';

test('positive case', () => {
  expect(isRegExp(/abc/)).toBe(true);
});

test('positive case with new RegExp', () => {
  expect(isRegExp(/abc/)).toBe(true);
});

test('negative case', () => {
  expect(isRegExp('abc' as any)).toBe(false);
});
