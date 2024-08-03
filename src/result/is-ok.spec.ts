import { expect, expectTypeOf, test } from 'vitest';
import { isOk } from './is-ok.js';
import { Err, Ok } from './result.js';

test('only returns true if value is a Result.Ok', () => {
  expect(isOk(Ok.create(1))).toEqual(true);
  expect(isOk(new Ok(1))).toEqual(true);
  expect(isOk(new Ok(undefined))).toEqual(true);
  expect(isOk(new Ok(null))).toEqual(true);
});

test.each([
  [undefined],
  [null],
  [false],
  [0],
  [new Error('')],
  [Err.create(1)],
  [Err.create(new Error(''))],
])('returns false unless value is a Result.Ok', value => {
  expect(isOk(value)).toEqual(false);
});

test('does not widen types of positive cases', () => {
  const value = Ok.create<'hi', Error>('hi');
  expect(isOk(value)).toEqual(true);
  if (isOk(value)) {
    expectTypeOf(value).toEqualTypeOf<Ok<'hi'>>();
  }
});

test('does not widen types of negative cases', () => {
  const value = 'hi' as const;
  expect(isOk(value)).toEqual(false);
  if (!isOk(value)) {
    expectTypeOf(value).toEqualTypeOf<'hi'>();
  }
});
