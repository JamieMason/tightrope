import { expect, test } from 'vitest';
import { andThen } from './and-then.js';
import type { Option } from './option.js';
import { None, Some, none } from './option.js';

test('andThen applies mapFn when input is Some', () => {
  const opt = Some.create(2);
  const mapFn = (value: number) => Some.create(`Answer: ${value * 2}`);
  const output = andThen(mapFn)(opt);
  expect<Option<string>>(output).toEqual(Some.create('Answer: 4'));
});

test('andThen returns none when input is None', () => {
  const mapFn = (value: number) => Some.create(value * 2);
  const value = None.create<number>();
  const output = andThen(mapFn, value);
  expect<Option<number>>(output).toEqual(none);
});

test('andThen handles complex types', () => {
  type Obj = { value: number };
  const opt = Some.create({ value: 2 });
  const mapFn = (value: Obj) => Some.create({ value: value.value * 2 });
  const output = andThen(mapFn, opt);
  expect<Option<Obj>>(output).toEqual(Some.create({ value: 4 }));
});
