import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { mapErr } from './map-err.js';
import { Err, Ok } from './result.js';

test('map an Err for another when Err', () => {
  expect(
    pipe(
      Err.create(new Error('Error: A')),
      mapErr(err => new Error(`${err.message} + B`)),
    ),
  ).toEqual(Err.create(new Error('Error: A + B')));
});

test('leave Ok untouched when Ok', () => {
  const a = Ok.create(1);
  const spy = vi.fn();
  expect(pipe(a, mapErr(spy))).toBe(a);
  expect(spy).not.toHaveBeenCalled();
});
