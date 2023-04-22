import { expect, it } from 'vitest';
import { none, Some } from '.';
import { andThen } from './and-then';

it('andThen applies mapFn when input is Some', () => {
  const opt = new Some(2);
  const mapFn = (value: number) => new Some(value * 2);
  expect(andThen(mapFn)(opt)).toEqual(new Some(4));
});

it('andThen returns none when input is None', () => {
  const mapFn = (value: number) => new Some(value * 2);
  expect(andThen(mapFn)(none)).toEqual(none);
});

it('andThen handles complex types', () => {
  const opt = new Some({ value: 2 });
  const mapFn = (value: { value: number }) =>
    new Some({ value: value.value * 2 });
  expect(andThen(mapFn)(opt)).toEqual(new Some({ value: 4 }));
});
