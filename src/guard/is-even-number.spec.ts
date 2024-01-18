import { expect, it } from 'vitest';
import { isEvenNumber } from './is-even-number.js';

it('positive case - even number', () => {
  expect(isEvenNumber(4)).toBe(true);
  expect(isEvenNumber(new Number(4))).toBe(true);
});

it('negative case - odd number', () => {
  expect(isEvenNumber(7)).toBe(false);
});

it('negative case - non-integer number', () => {
  expect(isEvenNumber(3.5)).toBe(false);
});

it('negative case - non-number value', () => {
  expect(isEvenNumber('4')).toBe(false);
});
