import { expect, it } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { Err, Ok } from './index.js';
import { mapErr } from './map-err.js';

it('map an Err for another when Err', () => {
  const a = new Error('Error: A');
  const b = new Error('Error: B');
  expect(
    pipe(
      Err.create(a),
      mapErr(() => b),
    ),
  ).toEqual(Err.create(b));
});

it('leave Ok untouched', () => {
  const a = Ok.create(1);
  const b = new Error('Error: B');
  expect(
    pipe(
      a,
      mapErr(() => b),
    ),
  ).toBe(a);
});
