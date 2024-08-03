import { expect, test } from 'vitest';
import { throwsAnyError } from './throws-any-error.js';

test('positive case', () => {
  const fn = () => {
    throw new Error('Example error');
  };
  expect(throwsAnyError(fn)).toBe(true);
});

test('negative case with no error', () => {
  const fn = () => undefined;
  expect(throwsAnyError(fn)).toBe(false);
});

test('negative case with non-function value', () => {
  expect(throwsAnyError('not a function' as any)).toBe(false);
});
