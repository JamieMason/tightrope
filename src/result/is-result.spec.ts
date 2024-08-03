import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { isResult } from './is-result.js';

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

it.each([
  [undefined],
  [null],
  [false],
  [0],
  [1],
  [true],
  [{}],
  [new Error('')],
])('returns false unless value is a Result (%j)', value => {
  expect(isResult(value)).toEqual(false);
});
