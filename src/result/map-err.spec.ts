import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { mapErr } from './map-err';

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
