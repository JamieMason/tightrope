import { expect, it } from 'vitest';
import { endsWith } from './ends-with.js';

it('positive case', () => {
  expect(endsWith('bar', 'foobar')).toBe(true);
});

it('negative case', () => {
  expect(endsWith('foo', 'foobar')).toBe(false);
});

it('non-string input', () => {
  expect(endsWith('test', 123)).toBe(false);
});

it('empty strings', () => {
  expect(endsWith('', '')).toBe(false);
});
