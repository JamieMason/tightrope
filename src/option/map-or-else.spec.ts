import { expect, it } from 'vitest';
import { mapOrElse, just, nothing } from '../rescript/maybe.gen';

it('mapOrElse applies mapFn when input is Some', () => {
  const opt = just(2);
  const mapFn = (x: number) => x * 2;
  const defaultFn = () => -1;
  expect(mapOrElse(mapFn, defaultFn, opt)).toEqual(4);
});

it('mapOrElse applies defaultFn when input is None', () => {
  const mapFn = (x: number) => x * 2;
  const defaultFn = () => -1;
  expect(mapOrElse(mapFn, defaultFn, nothing)).toEqual(-1);
});

it('mapOrElse handles complex types', () => {
  const opt = just({ value: 2 });
  const mapFn = (obj: { value: number }) => obj.value * 2;
  const defaultFn = () => -1;
  expect(mapOrElse(mapFn, defaultFn, opt)).toEqual(4);
});
