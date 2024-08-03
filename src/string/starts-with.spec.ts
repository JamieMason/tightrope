import { expect, test } from 'vitest';
import { startsWith } from './starts-with.js';

test('positive case', () => {
  expect(startsWith('start', 'start-example')).toBe(true);
});

test('negative case with mismatched start', () => {
  expect(startsWith('not', 'start-example')).toBe(false);
});

test('negative case with non-string value', () => {
  expect(startsWith('start', 123 as any)).toBe(false);
});
