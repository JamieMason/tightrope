import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { mapOr } from './map-or.js';

it('mapOr applies mapOkFn when input is Ok', () => {
  const result = new Ok(2);
  const defaultValue = 10;
  const mapOkFn = (value: number) => value * 2;
  expect(mapOr(defaultValue, mapOkFn)(result)).toEqual(4);
});

it('mapOr returns defaultValue when input is Err', () => {
  const result = new Err(2);
  const defaultValue = 10;
  const mapOkFn = (value: number) => value * 2;
  expect(mapOr(defaultValue, mapOkFn)(result)).toEqual(defaultValue);
});

it('mapOr handles complex types', () => {
  const result = new Ok({ value: 2 });
  const defaultValue = { value: 10 };
  const mapOkFn = (value: { value: number }) => ({ value: value.value * 2 });
  expect(mapOr(defaultValue, mapOkFn)(result)).toEqual({ value: 4 });
});
