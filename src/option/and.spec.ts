import { expect, it } from 'vitest';
import { none, Some } from '.';
import { pipe } from '../fn/pipe';
import { and } from './and';

it('returns None when Some && None', () => {
  const a = new Some(1);
  expect(pipe(a, and(none))).toEqual(none);
});

it('returns None when None && Some', () => {
  const b = new Some(1);
  expect(pipe(none, and(b))).toEqual(none);
});

it('returns None when None && None', () => {
  expect(pipe(none, and(none))).toEqual(none);
});

it('returns Some when Some && Some', () => {
  const a = new Some(1);
  const b = new Some(2);
  expect(pipe(a, and(b))).toEqual(b);
});
