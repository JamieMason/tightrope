import { expect, it } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { and } from './and.js';
import type { Option } from './index.js';
import { Some, none } from './index.js';

it('returns None when Some && None', () => {
  const a = new Some(1);
  const b = none;
  expect(pipe(a, and(b))).toEqual(none);
});

it('returns None when None && Some', () => {
  const a = none;
  const b = new Some(1);
  expect(pipe(a, and(b))).toEqual(none);
});

it('returns None when None && None', () => {
  const a = none;
  const b = none;
  expect(pipe(a, and(b))).toEqual(none);
});

it('returns Some when Some && Some', () => {
  const a = new Some(1);
  const b = new Some('hello');
  const output = pipe(a, and(b));
  expect<Option<string>>(output).toEqual(b);
});
