import { expect, test } from 'vitest';
import { isAsyncFunction } from './is-async-function.js';

test('positive case - async function', () => {
  const asyncFn = async () => undefined;
  expect(isAsyncFunction(asyncFn)).toBe(true);
});

test('negative case - regular function', () => {
  const regularFn = () => undefined;
  expect(isAsyncFunction(regularFn)).toBe(false);
});

test('negative case - non-function', () => {
  const nonFunction = 'not a function';
  expect(isAsyncFunction(nonFunction)).toBe(false);
});
