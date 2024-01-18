import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { mapOr } from './map-or.js';

it('mapOr should map a Some value using the provided function', () => {
  const someValue = new Some(5);
  const result = mapOr(0, (x: number) => x * 2, someValue);
  expect(result).toBe(10);
});

it('mapOr should return the default value when None is provided', () => {
  const result = mapOr('default', (x: string) => x.toUpperCase(), none);
  expect(result).toBe('default');
});
