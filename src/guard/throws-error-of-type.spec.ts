import { expect, it } from 'vitest';
import { throwsErrorOfType } from './throws-error-of-type';

it('positive case', () => {
  const fn = () => {
    throw new TypeError('Example error');
  };
  expect(throwsErrorOfType('TypeError', fn)).toBe(true);
});

it('negative case with different error type', () => {
  const fn = () => {
    throw new RangeError('Example error');
  };
  expect(throwsErrorOfType('TypeError', fn)).toBe(false);
});

it('negative case with no error', () => {
  const fn = () => undefined;
  expect(throwsErrorOfType('TypeError', fn)).toBe(false);
});

it('negative case with non-function value', () => {
  expect(throwsErrorOfType('TypeError', 'not a function' as any)).toBe(false);
});
