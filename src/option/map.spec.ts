import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { map } from './map.js';

it('map should map a Some value using the provided function', () => {
  const someValue = new Some(5);
  const result = map((x: number) => x * 2, someValue);
  expect(result).toEqual(new Some(10));
});

it('map should return None when None is provided', () => {
  const result = map((x: string) => x.toUpperCase(), none);
  expect(result).toBe(none);
});
