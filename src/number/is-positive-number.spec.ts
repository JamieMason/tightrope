import { expect, expectTypeOf, test } from 'vitest';
import { type PositiveNumber, isPositiveNumber } from './is-positive-number.js';

test.each([
  [1, true],
  [1.0, true],
  [0.01, true],
  [0, false],
  [-1, false],
  [Number.NaN, false],
])('isPositiveNumber(%s) should be %j', (value, expected) => {
  expect(isPositiveNumber(value)).toEqual(expected);
});

test('narrows to a branded type', () => {
  const value: unknown = 1;
  expect(isPositiveNumber(value)).toEqual(true);
  if (isPositiveNumber(value)) {
    expectTypeOf(value).toEqualTypeOf<PositiveNumber>();
  }
});
