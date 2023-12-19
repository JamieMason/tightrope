import { expect, it } from 'vitest';
import { andThen } from './AndThen.gen';
import { type maybe, just, nothing } from './Maybe.gen';

it('andThen applies mapFn when input is Just', () => {
  const opt = just(2);
  const mapFn = (value: number) => just(`Answer: ${value * 2}`);
  const output = andThen(mapFn)(opt);
  expect<maybe<string>>(output).toEqual(just('Answer: 4'));
});

it('andThen returns nothing when input is nothing', () => {
  const mapFn = (value: number) => just(value * 2);
  const output = andThen(mapFn)(nothing);
  expect<maybe<number>>(output).toEqual(nothing);
});

it('andThen handles complex types', () => {
  type Obj = { value: number };
  const opt = just({ value: 2 });
  const mapFn = (value: Obj) => just({ value: value.value * 2 });
  const output = andThen(mapFn)(opt);
  expect<maybe<Obj>>(output).toEqual(just({ value: 4 }));
});
