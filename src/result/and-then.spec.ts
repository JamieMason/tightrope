import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { multiply } from '../number/multiply.js';
import { andThen } from './and-then.js';
import { Err, Ok } from './result.js';

test('short-circuits when upstream is Err', () => {
  const spy = vi.fn();
  const err = new Error('wat');
  expect(pipe(Err.create(err), andThen(spy))).toEqual(new Err(err));
  expect(spy).not.toHaveBeenCalled();
});

test('returns mapped Ok when upstream is Ok', () => {
  expect(
    pipe(
      Ok.create(3),
      andThen(num => Ok.create(multiply(2, num))),
    ),
  ).toEqual(new Ok(6));
});

test('returns mapped Err when upstream is Ok', () => {
  const spy = vi.fn();
  const err = new Error('wat');
  expect(
    pipe(
      Ok.create(3),
      andThen(() => Err.create(err)),
      andThen(spy),
    ),
  ).toEqual(new Err(err));
  expect(spy).not.toHaveBeenCalled();
});

test('returns Err when map function throws', () => {
  const spy = vi.fn();
  const err = new Error('wat');
  expect(
    pipe(
      Ok.create(3),
      andThen(() => {
        throw err;
      }),
      andThen(spy),
    ),
  ).toEqual(new Err(err));
  expect(spy).not.toHaveBeenCalled();
});
