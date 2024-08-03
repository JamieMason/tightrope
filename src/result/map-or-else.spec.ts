import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { mapOrElse } from './map-or-else.js';
import { Err, Ok } from './result.js';

test('mapOrElse applies mapOkFn when input is Ok', () => {
  const spy = vi.fn();
  expect(
    pipe(
      Ok.create(2),
      mapOrElse(spy, value => value * 2),
    ),
  ).toEqual(4);
  expect(spy).not.toHaveBeenCalled();
});

test('mapOrElse applies mapErrFn when input is Err', () => {
  const spy = vi.fn();
  expect(
    pipe(
      Err.create(2),
      mapOrElse(err => err * 3, spy),
    ),
  ).toEqual(6);
  expect(spy).not.toHaveBeenCalled();
});

test('mapOrElse handles complex types', () => {
  const spy = vi.fn();
  expect(
    pipe(
      Ok.create({ value: 2 }),
      mapOrElse(spy, value => ({ value: value.value * 2 })),
    ),
  ).toEqual({ value: 4 });
  expect(spy).not.toHaveBeenCalled();
});
