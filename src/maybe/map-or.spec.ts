import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { mapOr } from './map-or';

it('mapOr should map a Just value using the provided function', () => {
  const someValue = new just(5);
  const result = mapOr(0, (x: number) => x * 2, someValue);
  expect(result).toBe(10);
});

it('mapOr should return the default value when Nothing is provided', () => {
  const result = mapOr('default', (x: string) => x.toUpperCase(), nothing);
  expect(result).toBe('default');
});
