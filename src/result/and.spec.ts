import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { and } from './and.js';
import { Err, Ok } from './result.js';

test('returns Err when Ok && Err', () => {
  const a = new Ok(1);
  const b = new Err(new Error('Error: B'));
  expect(pipe(a, and(b))).toEqual(b);
});

test('returns Err when Err && Ok', () => {
  const a = new Err(new Error('Error: A'));
  const b = new Ok(1);
  expect(pipe(a, and(b))).toEqual(a);
});

test('returns Err when Err && Err', () => {
  const a = new Err(new Error('Error: A'));
  const b = new Err(new Error('Error: B'));
  expect(pipe(a, and(b))).toEqual(a);
});

test('returns Ok when Ok && Ok', () => {
  const a = new Ok(1);
  const b = new Ok(2);
  expect(pipe(a, and(b))).toEqual(b);
});
