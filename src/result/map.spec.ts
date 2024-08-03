import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { map } from './map.js';
import { Err, Ok } from './result.js';

test('map an Ok for another when Ok', () => {
  const a = 100;
  expect(
    pipe(
      Ok.create<number>(a),
      map(num => num * 2),
      map(str => `${str} times!`),
      map(str => str.toUpperCase()),
    ),
  ).toEqual(Ok.create('200 TIMES!'));
});

test('leave Err untouched', () => {
  const a = Err.create(new Error('Error'));
  expect(
    pipe(
      a,
      map(() => 'never gonna'),
    ),
  ).toBe(a);
});
