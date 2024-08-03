import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { map } from './map.js';
import { Some, none } from './option.js';

test('map should map a Some value using the provided function', () => {
  expect(
    pipe(
      Some.create(5),
      map((x: number) => x * 2),
    ),
  ).toEqual(Some.create(10));
});

test('map should return None when None is provided', () => {
  const result = map((x: string) => x.toUpperCase(), none);
  expect(result).toBe(none);
});
