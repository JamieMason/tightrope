import { expect, test } from 'vitest';
import { mapOrElse } from './map-or-else.js';
import { type Option, Some, none } from './option.js';

test('mapOrElse applies mapSome when input is Some', () => {
  const opt = Some.create(2);
  const mapSome = (x: number) => x * 2;
  const mapNone = () => -1;
  expect(mapOrElse(mapNone, mapSome, opt)).toEqual(4);
});

test('mapOrElse applies mapNone when input is None', () => {
  const value = none as Option<number>;
  const mapSome = (x: number) => x * 2;
  const mapNone = () => -1;
  expect(mapOrElse(mapNone, mapSome, value)).toEqual(-1);
});

test('mapOrElse handles complex types', () => {
  const opt = Some.create({ value: 2 });
  const mapSome = (obj: { value: number }) => obj.value * 2;
  const mapNone = () => -1;
  expect(mapOrElse(mapNone, mapSome, opt)).toEqual(4);
});
