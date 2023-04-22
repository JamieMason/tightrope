import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { isResult } from './is-result';

it('returns true if value is a Result.Ok', () => {
  expect(isResult(Ok.create(1))).toEqual(true);
  expect(isResult(new Ok(1))).toEqual(true);
  expect(isResult(new Ok(undefined))).toEqual(true);
  expect(isResult(new Ok(null))).toEqual(true);
});

it('returns true if value is a Result.Err', () => {
  expect(isResult(Err.create(new Error('wat?')))).toEqual(true);
  expect(isResult(new Err(new Error('wat?')))).toEqual(true);
});

it('returns false unless value is a Result', () => {
  [undefined, null, false, 0, 1, true, {}, new Error('')].forEach((value) => {
    expect(isResult(value)).toEqual(false);
  });
});
