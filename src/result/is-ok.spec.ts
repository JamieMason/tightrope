import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { isOk } from './is-ok';

it('only returns true if value is a Result.Ok', () => {
  expect(isOk(Ok.create(1))).toEqual(true);
  expect(isOk(new Ok(1))).toEqual(true);
  expect(isOk(new Ok(undefined))).toEqual(true);
  expect(isOk(new Ok(null))).toEqual(true);
});

it('returns false unless value is a Result.Ok', () => {
  [
    undefined,
    null,
    false,
    0,
    new Error(''),
    Err.create(1),
    Err.create(new Error('')),
  ].forEach((value) => {
    expect(isOk(value)).toEqual(false);
  });
});
