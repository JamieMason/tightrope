import { expect, it } from 'vitest';
import type { maybe } from './Maybe.gen';
import { nothing, just } from './Maybe.gen';
import { filter } from './filter';

it('filter returns Just when predicate is true', () => {
  const opt = new just<string | number>('hello');
  const predicate = (x: unknown): x is string => typeof x === 'string';
  const output = filter(predicate, opt);
  expect<maybe<string>>(output).toEqual(new just('hello'));
});

it('filter returns Nothing when predicate is false', () => {
  const opt = new just('hello');
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<maybe<number>>(output).toEqual(nothing);
});

it('filter returns Nothing when input is Nothing', () => {
  const opt = nothing;
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<maybe<number>>(output).toEqual(nothing);
});

it('filter handles complex types', () => {
  type Obj = { value: number };
  const opt = new just({ value: 2 });
  const predicate = (obj: Obj): obj is Obj => obj.value % 2 === 0;
  const output = filter(predicate, opt);
  expect<maybe<Obj>>(output).toEqual(new just({ value: 2 }));
});
