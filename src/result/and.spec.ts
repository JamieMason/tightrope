import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { and } from './and';

it('returns Err when Ok && Err', () => {
  const a = new Ok(1);
  const b = new Err(new Error('Error: B'));
  expect(pipe(a, and(b))).toEqual(b);
});

it('returns Err when Err && Ok', () => {
  const a = new Err(new Error('Error: A'));
  const b = new Ok(1);
  expect(pipe(a, and(b))).toEqual(a);
});

it('returns Err when Err && Err', () => {
  const a = new Err(new Error('Error: A'));
  const b = new Err(new Error('Error: B'));
  expect(pipe(a, and(b))).toEqual(a);
});

it('returns Ok when Ok && Ok', () => {
  const a = new Ok(1);
  const b = new Ok(2);
  expect(pipe(a, and(b))).toEqual(b);
});
