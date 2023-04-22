import { expect, it } from 'vitest';
import { isAsyncFunction } from './is-async-function';

it('positive case - async function', () => {
  const asyncFn = async () => undefined;
  expect(isAsyncFunction(asyncFn)).toBe(true);
});

it('negative case - regular function', () => {
  const regularFn = () => undefined;
  expect(isAsyncFunction(regularFn)).toBe(false);
});

it('negative case - non-function', () => {
  const nonFunction = 'not a function';
  expect(isAsyncFunction(nonFunction)).toBe(false);
});
