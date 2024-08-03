import { expect, test } from 'vitest';
import { mapOr } from './map-or.js';
import { None, Some } from './option.js';

test('mapOr should map a Some value using the provided function', () => {
  const someValue = Some.create(5);
  const result = mapOr(0, (x: number) => x * 2, someValue);
  expect(result).toBe(10);
});

test('mapOr should return the default value when None is provided', () => {
  const result = mapOr(
    'default',
    (x: string) => x.toUpperCase(),
    None.create<string>(),
  );
  expect(result).toBe('default');
});
