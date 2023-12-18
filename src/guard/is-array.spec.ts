import { expect, it } from 'vitest';
import { isArray } from './is-array';

it('asserts value is an array, preserving its type', () => {
  expect.assertions(1);
  const knownArray = [1, 2];
  if (isArray(knownArray)) {
    expect<number[]>(knownArray).toEqual(knownArray);
  }
});

it('asserts unknown type is an array', () => {
  expect.assertions(1);
  const unknownType: unknown = [1, 2];
  if (isArray(unknownType)) {
    expect<unknown[]>(unknownType).toEqual(unknownType);
  }
});

it('asserts unknown array is an array', () => {
  expect.assertions(1);
  const unknownArray: unknown[] = [1, 2];
  if (isArray(unknownArray)) {
    expect<unknown[]>(unknownArray).toEqual(unknownArray);
  }
});

it('asserts string is not an array', () => {
  expect(isArray('')).toEqual(false);
});
