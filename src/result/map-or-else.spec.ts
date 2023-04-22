import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { mapOrElse } from './map-or-else';

it('mapOrElse applies mapOkFn when input is Ok', () => {
  const result = new Ok(2);
  const mapErrFn = (err: number) => err * 3;
  const mapOkFn = (value: number) => value * 2;
  expect(mapOrElse(mapErrFn, mapOkFn)(result)).toEqual(4);
});

it('mapOrElse applies mapErrFn when input is Err', () => {
  const result = new Err(2);
  const mapErrFn = (err: number) => err * 3;
  const mapOkFn = (value: number) => value * 2;
  expect(mapOrElse(mapErrFn, mapOkFn)(result)).toEqual(6);
});

it('mapOrElse handles complex types', () => {
  const result = new Ok({ value: 2 });
  const mapErrFn = (err: { value: number }) => ({ value: err.value * 3 });
  const mapOkFn = (value: { value: number }) => ({ value: value.value * 2 });
  expect(mapOrElse(mapErrFn, mapOkFn)(result)).toEqual({ value: 4 });
});
