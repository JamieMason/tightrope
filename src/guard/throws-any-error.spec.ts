import { expect, it } from 'vitest';
import { throwsAnyError } from './throws-any-error.js';

it('positive case', () => {
  const fn = () => {
    throw new Error('Example error');
  };
  expect(throwsAnyError(fn)).toBe(true);
});

it('negative case with no error', () => {
  const fn = () => undefined;
  expect(throwsAnyError(fn)).toBe(false);
});

it('negative case with non-function value', () => {
  expect(throwsAnyError('not a function' as any)).toBe(false);
});
