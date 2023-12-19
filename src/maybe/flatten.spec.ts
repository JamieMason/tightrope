import { expect, it } from 'vitest';
import type { maybe } from './Maybe.gen';
import { nothing, just } from './Maybe.gen';
import { flatten } from './flatten';

it('flatten returns inner Just when input is Just(Just)', () => {
  const opt = new just(new just(2));
  const output = flatten(opt);
  expect<maybe<number>>(output).toEqual(new just(2));
});

it('flatten returns Nothing when input is Just(Nothing)', () => {
  const inner = nothing;
  const opt = new just(inner);
  const output = flatten(opt);
  expect<maybe<unknown>>(output).toEqual(nothing);
});

it('flatten returns Nothing when input is Nothing', () => {
  const output = flatten(nothing);
  expect<maybe<unknown>>(output).toEqual(nothing);
});

it('flatten handles complex types', () => {
  type Obj = { value: number };
  const opt = new just(new just({ value: 2 }));
  const output = flatten(opt);
  expect<maybe<Obj>>(output).toEqual(new just({ value: 2 }));
});
