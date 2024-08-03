import { expect, it } from 'vitest';
import { isFunction } from './is-function.js';

it('positive case - regular function', () => {
  const fn = () => {
    /*.*/
  };
  expect(isFunction(fn)).toBe(true);
});

it('positive case - arrow function', () => {
  const arrowFn = () => {
    /*.*/
  };
  expect(isFunction(arrowFn)).toBe(true);
});

it('negative case - non-function value', () => {
  const nonFunction = 'not a function';
  expect(isFunction(nonFunction)).toBe(false);
});
