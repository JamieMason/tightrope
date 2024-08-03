import { expect, test } from 'vitest';
import { isFunction } from './is-function.js';

test('positive case - regular function', () => {
  const fn = () => {
    /*.*/
  };
  expect(isFunction(fn)).toBe(true);
});

test('positive case - arrow function', () => {
  const arrowFn = () => {
    /*.*/
  };
  expect(isFunction(arrowFn)).toBe(true);
});

test('negative case - non-function value', () => {
  const nonFunction = 'not a function';
  expect(isFunction(nonFunction)).toBe(false);
});
