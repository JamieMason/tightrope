import { expect, it } from 'vitest';
import type { Maybe } from '.';
import { nothing, Just } from '.';
import { flatten } from './flatten';

it('flatten returns inner Just when input is Just(Just)', () => {
  const opt = new Just(new Just(2));
  const output = flatten(opt);
  expect<Maybe<number>>(output).toEqual(new Just(2));
});

it('flatten returns Nothing when input is Just(Nothing)', () => {
  const inner = nothing;
  const opt = new Just(inner);
  const output = flatten(opt);
  expect<Maybe<unknown>>(output).toEqual(nothing);
});

it('flatten returns Nothing when input is Nothing', () => {
  const output = flatten(nothing);
  expect<Maybe<unknown>>(output).toEqual(nothing);
});

it('flatten handles complex types', () => {
  type Obj = { value: number };
  const opt = new Just(new Just({ value: 2 }));
  const output = flatten(opt);
  expect<Maybe<Obj>>(output).toEqual(new Just({ value: 2 }));
});
