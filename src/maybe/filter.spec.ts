import { expect, it } from 'vitest';
import type { Maybe } from '.';
import { nothing, Just } from '.';
import { filter } from './filter';

it('filter returns Just when predicate is true', () => {
  const opt = new Just<string | number>('hello');
  const predicate = (x: unknown): x is string => typeof x === 'string';
  const output = filter(predicate, opt);
  expect<Maybe<string>>(output).toEqual(new Just('hello'));
});

it('filter returns Nothing when predicate is false', () => {
  const opt = new Just('hello');
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<Maybe<number>>(output).toEqual(nothing);
});

it('filter returns Nothing when input is Nothing', () => {
  const opt = nothing;
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<Maybe<number>>(output).toEqual(nothing);
});

it('filter handles complex types', () => {
  type Obj = { value: number };
  const opt = new Just({ value: 2 });
  const predicate = (obj: Obj): obj is Obj => obj.value % 2 === 0;
  const output = filter(predicate, opt);
  expect<Maybe<Obj>>(output).toEqual(new Just({ value: 2 }));
});
