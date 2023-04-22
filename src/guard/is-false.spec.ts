import { expect, it } from 'vitest';
import { isFalse } from './is-false';

it('positive case', () => {
  expect(isFalse(false)).toBe(true);
});

it('positive case with new Boolean(false)', () => {
  expect(isFalse(new Boolean(false))).toBe(true);
});

it('negative case', () => {
  expect(isFalse(true)).toBe(false);
});

it('negative case with new Boolean(true)', () => {
  expect(isFalse(new Boolean(true))).toBe(false);
});

it('negative case with non-boolean value', () => {
  expect(isFalse('false' as any)).toBe(false);
});
