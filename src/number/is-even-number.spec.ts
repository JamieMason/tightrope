import { expect, test } from 'vitest';
import { isEvenNumber } from './is-even-number.js';

test('positive case - even number', () => {
  expect(isEvenNumber(4)).toBe(true);
  expect(isEvenNumber(new Number(4))).toBe(true);
});

test('negative case - odd number', () => {
  expect(isEvenNumber(7)).toBe(false);
});

test('negative case - non-integer number', () => {
  expect(isEvenNumber(3.5)).toBe(false);
});

test('negative case - non-number value', () => {
  expect(isEvenNumber('4')).toBe(false);
});
