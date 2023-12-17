import { expect, it } from 'vitest';
import type { Option } from '.';
import { none, Some } from '.';
import { andThen } from './and-then';

it('andThen applies mapFn when input is Some', () => {
  const opt = new Some(2);
  const mapFn = (value: number) => new Some(`Answer: ${value * 2}`);
  const output = andThen(mapFn)(opt);
  expect<Option<string>>(output).toEqual(new Some('Answer: 4'));
});

it('andThen returns none when input is None', () => {
  const mapFn = (value: number) => new Some(value * 2);
  const output = andThen(mapFn)(none);
  expect<Option<number>>(output).toEqual(none);
});

it('andThen handles complex types', () => {
  type Obj = { value: number };
  const opt = new Some({ value: 2 });
  const mapFn = (value: Obj) => new Some({ value: value.value * 2 });
  const output = andThen(mapFn)(opt);
  expect<Option<Obj>>(output).toEqual(new Some({ value: 4 }));
});
