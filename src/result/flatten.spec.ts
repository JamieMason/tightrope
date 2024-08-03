import { expect, test } from 'vitest';
import { flatten } from './flatten.js';
import { Err, Ok } from './result.js';

test('returns flat Ok unchanged', () => {
  const res = new Ok(1);
  expect(flatten(res)).toBe(res);
});

test('returns nested Ok', () => {
  const inner = new Ok(1);
  const outer = new Ok(inner);
  expect(flatten(outer)).toBe(inner);
});

test('returns nested Err', () => {
  const inner = new Err(new Error('innermost'));
  const outer = new Err(inner);
  expect(flatten(outer)).toBe(inner);
});

test('throws if value is not an Ok or an Err', () => {
  expect(() => {
    flatten(2 as any);
  }).toThrow(new Error('flatten() called with non Result value: 2'));
});
