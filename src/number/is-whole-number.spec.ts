import { expect, expectTypeOf, test } from 'vitest';
import { type WholeNumber, isWholeNumber } from './is-whole-number.js';

test.each([
  [10.0, true],
  [10, true],
  [0, true],
  [0.0, true],
  [-0, true],
  [1.1, false],
  [Number.NaN, false],
])('isWholeNumber(%s) should be %j', (value, expected) => {
  expect(isWholeNumber(value)).toEqual(expected);
});

test('narrows to a branded type', () => {
  const value: unknown = 1;
  expect(isWholeNumber(value)).toEqual(true);
  if (isWholeNumber(value)) {
    expectTypeOf(value).toEqualTypeOf<WholeNumber>();
  }
});
