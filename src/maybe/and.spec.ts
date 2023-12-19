import { expect, it } from 'vitest';
import type { maybe } from './Maybe.gen';
import { nothing, just } from './Maybe.gen';
import { pipe } from '../fn/pipe';
import { and } from './and';

it('returns Nothing when Just && Nothing', () => {
  const a = new just(1);
  const b = nothing;
  expect(pipe(a, and(b))).toEqual(nothing);
});

it('returns Nothing when Nothing && Just', () => {
  const a = nothing;
  const b = new just(1);
  expect(pipe(a, and(b))).toEqual(nothing);
});

it('returns Nothing when Nothing && Nothing', () => {
  const a = nothing;
  const b = nothing;
  expect(pipe(a, and(b))).toEqual(nothing);
});

it('returns Just when Just && Just', () => {
  const a = new just(1);
  const b = new just('hello');
  const output = pipe(a, and(b));
  expect<maybe<string>>(output).toEqual(b);
});
