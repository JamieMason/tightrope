import { expect, test } from 'vitest';
import { filter } from './filter.js';
import type { Option } from './option.js';
import { Some, none } from './option.js';

test('filter returns Some when predicate is true', () => {
  const opt = Some.create<string | number>('hello');
  const predicate = (x: unknown): x is string => typeof x === 'string';
  const output = filter(predicate, opt);
  expect<Option<string>>(output).toEqual(Some.create('hello'));
});

test('filter returns None when predicate is false', () => {
  const opt = Some.create('hello');
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<Option<number>>(output).toEqual(none);
});

test('filter returns None when input is None', () => {
  const opt = none;
  const predicate = (x: number): x is number => x % 2 === 0;
  const output = filter(predicate, opt);
  expect<Option<number>>(output).toEqual(none);
});

test('filter handles complex types', () => {
  type Obj = { value: number };
  const opt = Some.create({ value: 2 });
  const predicate = (obj: Obj): obj is Obj => obj.value % 2 === 0;
  const output = filter(predicate, opt);
  expect<Option<Obj>>(output).toEqual(Some.create({ value: 2 }));
});
