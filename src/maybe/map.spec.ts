import { expect, it } from 'vitest';
import { nothing, Just } from '.';
import { map } from './map';

it('map should map a Just value using the provided function', () => {
  const someValue = new Just(5);
  const result = map((x: number) => x * 2, someValue);
  expect(result).toEqual(new Just(10));
});

it('map should return Nothing when Nothing is provided', () => {
  const result = map((x: string) => x.toUpperCase(), nothing);
  expect(result).toBe(nothing);
});
