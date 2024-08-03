import { expect, it } from 'vitest';
import { filter } from './filter.js';
import type { Option } from './index.js';
import { Some, none } from './index.js';

it('filter returns Some when predicate is true', () => {
  const opt = new Some<string | number>('hello');
  const predicate = (x: unknown): x is string => typeof x === 'string';
  const output = filter(predicate, opt);
  expect<Option<string>>(output).toEqual(new Some('hello'));
});

it('filter returns None when predicate is false', () => {
  const opt = new Some('hello');
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<Option<number>>(output).toEqual(none);
});

it('filter returns None when input is None', () => {
  const opt = none;
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<Option<number>>(output).toEqual(none);
});

it('filter handles complex types', () => {
  type Obj = { value: number };
  const opt = new Some({ value: 2 });
  const predicate = (obj: Obj): obj is Obj => obj.value % 2 === 0;
  const output = filter(predicate, opt);
  expect<Option<Obj>>(output).toEqual(new Some({ value: 2 }));
});
