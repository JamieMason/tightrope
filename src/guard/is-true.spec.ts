import { expect, it } from 'vitest';
import { isTrue } from './is-true';

it('positive case', () => {
  expect(isTrue(true)).toBe(true);
});

it('positive case with new Boolean(true)', () => {
  expect(isTrue(new Boolean(true))).toBe(true);
});

it('negative case', () => {
  expect(isTrue(false)).toBe(false);
});

it('negative case with new Boolean(false)', () => {
  expect(isTrue(new Boolean(false))).toBe(false);
});

it('negative case with non-boolean value', () => {
  expect(isTrue('true' as any)).toBe(false);
});
