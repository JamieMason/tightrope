import { expect, it } from 'vitest';
import type { Maybe } from '.';
import { nothing, Just } from '.';
import { pipe } from '../fn/pipe';
import { and } from './and';

it('returns Nothing when Just && Nothing', () => {
  const a = new Just(1);
  const b = nothing;
  expect(pipe(a, and(b))).toEqual(nothing);
});

it('returns Nothing when Nothing && Just', () => {
  const a = nothing;
  const b = new Just(1);
  expect(pipe(a, and(b))).toEqual(nothing);
});

it('returns Nothing when Nothing && Nothing', () => {
  const a = nothing;
  const b = nothing;
  expect(pipe(a, and(b))).toEqual(nothing);
});

it('returns Just when Just && Just', () => {
  const a = new Just(1);
  const b = new Just('hello');
  const output = pipe(a, and(b));
  expect<Maybe<string>>(output).toEqual(b);
});
