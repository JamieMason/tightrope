import { expect, test } from 'vitest';
import { isArray } from './is-array.js';

test('asserts value is an array, preserving its type', () => {
  expect.assertions(1);
  const knownArray = [1, 2];
  if (isArray(knownArray)) {
    expect<number[]>(knownArray).toEqual(knownArray);
  }
});

test('asserts unknown type is an array', () => {
  expect.assertions(1);
  const unknownType: unknown = [1, 2];
  if (isArray(unknownType)) {
    expect<unknown[]>(unknownType).toEqual(unknownType);
  }
});

test('asserts unknown array is an array', () => {
  expect.assertions(1);
  const unknownArray: unknown[] = [1, 2];
  if (isArray(unknownArray)) {
    expect<unknown[]>(unknownArray).toEqual(unknownArray);
  }
});

test('asserts string is not an array', () => {
  expect(isArray('')).toEqual(false);
});
