import { expect, it } from 'vitest';
import { isRegExp } from './is-reg-exp.js';

it('positive case', () => {
  expect(isRegExp(/abc/)).toBe(true);
});

it('positive case with new RegExp', () => {
  expect(isRegExp(new RegExp('abc'))).toBe(true);
});

it('negative case', () => {
  expect(isRegExp('abc' as any)).toBe(false);
});
