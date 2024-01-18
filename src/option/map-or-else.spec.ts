import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { mapOrElse } from './map-or-else.js';

it('mapOrElse applies mapFn when input is Some', () => {
  const opt = new Some(2);
  const mapFn = (x: number) => x * 2;
  const defaultFn = () => -1;
  expect(mapOrElse(mapFn, defaultFn, opt)).toEqual(4);
});

it('mapOrElse applies defaultFn when input is None', () => {
  const mapFn = (x: number) => x * 2;
  const defaultFn = () => -1;
  expect(mapOrElse(mapFn, defaultFn, none)).toEqual(-1);
});

it('mapOrElse handles complex types', () => {
  const opt = new Some({ value: 2 });
  const mapFn = (obj: { value: number }) => obj.value * 2;
  const defaultFn = () => -1;
  expect(mapOrElse(mapFn, defaultFn, opt)).toEqual(4);
});
