import { expect, expectTypeOf, test } from 'vitest';
import { isResult } from './is-result.js';
import { Err, Ok, type Result } from './result.js';

test('returns true if value is a Result.Ok', () => {
  expect(isResult(Ok.create(1))).toEqual(true);
  expect(isResult(new Ok(1))).toEqual(true);
  expect(isResult(new Ok(undefined))).toEqual(true);
  expect(isResult(new Ok(null))).toEqual(true);
});

test('returns true if value is a Result.Err', () => {
  expect(isResult(Err.create(new Error('wat?')))).toEqual(true);
  expect(isResult(new Err(new Error('wat?')))).toEqual(true);
});

test.each([
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

test('does not widen types of positive cases', () => {
  const value = Ok.create<number, Error>(1);
  expect(isResult(value)).toEqual(true);
  if (isResult(value)) {
    expectTypeOf(value).toEqualTypeOf<Result<number, Error>>();
  }
});

test('does not widen types of negative cases', () => {
  const result: null = null;
  expect(isResult(result)).toEqual(false);
  if (!isResult(result)) {
    expectTypeOf(result).toEqualTypeOf<null>();
  }
});
