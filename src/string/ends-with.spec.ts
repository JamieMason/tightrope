import { expect, test } from 'vitest';
import { endsWith } from './ends-with.js';

test('positive case', () => {
  expect(endsWith('bar', 'foobar')).toBe(true);
});

test('negative case', () => {
  expect(endsWith('foo', 'foobar')).toBe(false);
});

test('non-string input', () => {
  expect(endsWith('test', 123)).toBe(false);
});

test('empty strings', () => {
  expect(endsWith('', '')).toBe(false);
});
