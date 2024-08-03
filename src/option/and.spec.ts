import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { and } from './and.js';
import type { Option } from './option.js';
import { Some, none } from './option.js';

test('returns None when Some && None', () => {
  const a = Some.create(1);
  const b = none;
  expect(pipe(a, and(b))).toEqual(none);
});

test('returns None when None && Some', () => {
  const a = none;
  const b = Some.create(1);
  expect(pipe(a, and(b))).toEqual(none);
});

test('returns None when None && None', () => {
  const a = none;
  const b = none;
  expect(pipe(a, and(b))).toEqual(none);
});

test('returns Some when Some && Some', () => {
  const a = Some.create(1);
  const b = Some.create('hello');
  const output = pipe(a, and(b));
  expect<Option<string | number>>(output).toEqual(b);
});
