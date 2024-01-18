import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { unwrapOr } from './unwrap-or.js';

it('unwrapOr should return the value when Some is provided', () => {
  const someValue = new Some(5);
  const result = unwrapOr(10, someValue);
  expect(result).toEqual(5);
});

it('unwrapOr should return the default value when None is provided', () => {
  const result = unwrapOr(10, none);
  expect(result).toEqual(10);
});
