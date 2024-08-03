import { expect, test } from 'vitest';
import { None, Some } from './option.js';
import { unwrapOr } from './unwrap-or.js';

test('unwrapOr should return the value when Some is provided', () => {
  const someValue = Some.create(5);
  const result = unwrapOr(10, someValue);
  expect(result).toEqual(5);
});

test('unwrapOr should return the default value when None is provided', () => {
  const result = unwrapOr(10, None.create<number>());
  expect(result).toEqual(10);
});
