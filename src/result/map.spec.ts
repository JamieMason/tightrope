import { expect, it } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { Err, Ok } from './index.js';
import { map } from './map.js';

it('map an Ok for another when Ok', () => {
  const a = 100;
  expect(
    pipe(
      Ok.create<number>(a),
      map(num => num * 2),
      map(str => `${str}!`),
    ),
  ).toEqual(Ok.create('200!'));
});

it('leave Err untouched', () => {
  const a = Err.create(new Error('Error'));
  expect(
    pipe(
      a,
      map(() => 'never gonna'),
    ),
  ).toBe(a);
});
