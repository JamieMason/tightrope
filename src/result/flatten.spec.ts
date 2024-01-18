import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { flatten } from './flatten.js';

it('returns flat Ok unchanged', () => {
  const res = new Ok(1);
  expect(flatten(res)).toBe(res);
});

it('returns nested Ok', () => {
  const innermost = new Ok(1);
  const inner = new Ok(innermost);
  const outer = new Ok(inner);
  expect(flatten(outer)).toBe(innermost);
});

it('returns nested Err', () => {
  const innermost = new Err(new Error('innermost'));
  const inner = new Err(innermost);
  const outer = new Err(inner);
  expect(flatten(outer)).toBe(innermost);
});

it('throws if value is not an Ok or an Err', () => {
  const err = new Error('flatten() called with non Result value: 2');
  expect(() => {
    flatten(2);
  }).toThrow(err);
});
