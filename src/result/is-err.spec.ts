import { expect, expectTypeOf, test } from 'vitest';
import { isErr } from './is-err.js';
import { Err, Ok } from './result.js';

test('only returns true if value is a Result.Err', () => {
  expect(isErr(Err.create(new Error('wat?')))).toEqual(true);
  expect(isErr(new Err(new Error('wat?')))).toEqual(true);
});

test.each([
  [undefined],
  [null],
  [false],
  [0],
  [new Error('')],
  [Ok.create(1)],
  [Ok.create(new Error(''))],
])('returns false unless value is a Result.Err', value => {
  expect(isErr(value)).toEqual(false);
});

test('does not widen types of positive cases', () => {
  const value = Err.create('wat?');
  expect(isErr(value)).toEqual(true);
  if (isErr(value)) {
    expectTypeOf(value).toEqualTypeOf<Err<string>>();
  }
});

test('does not widen types of negative cases', () => {
  const value: null = null;
  expect(isErr(value)).toEqual(false);
  if (!isErr(value)) {
    expectTypeOf(value).toEqualTypeOf<null>();
  }
});
