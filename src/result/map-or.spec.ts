import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { mapOr } from './map-or.js';
import { Err, Ok } from './result.js';

test('mapOr applies mapOkFn when input is Ok', () => {
  expect(
    pipe(
      new Ok(2),
      mapOr(10, value => value * 2),
    ),
  ).toEqual(4);
});

test('mapOr returns defaultValue when input is Err', () => {
  expect(
    pipe(
      Err.create<Error, number>(new Error('wat?')),
      mapOr(10, value => value * 2),
    ),
  ).toEqual(10);
});

test('mapOr handles complex types', () => {
  expect(
    pipe(
      Ok.create<{ value: number }, Error>({ value: 2 }),
      mapOr({ value: 10 }, ({ value }) => ({ value: value * 2 })),
    ),
  ).toEqual({ value: 4 });
});
