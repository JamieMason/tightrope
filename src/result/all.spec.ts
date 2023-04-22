import { expect, it } from 'vitest';
import type { Result } from '.';
import { Err, Ok } from '.';
import { all } from './all';

it('all returns Ok with an array of values when all input Results are Ok', () => {
  const results = [new Ok(1), new Ok(2), new Ok(3)];
  const expectedResult = new Ok([1, 2, 3]);
  expect(all(results)).toEqual(expectedResult);
});

it('all returns Err with an array of errors when input Results contain any Err', () => {
  const results = [new Ok(1), new Err('error1'), new Ok(3), new Err('error2')];
  const expectedResult = new Err(['error1', 'error2']);
  expect(all(results)).toEqual(expectedResult);
});

it('all returns Ok with an empty array when input is an empty array', () => {
  const results: Array<Result<number, string>> = [];
  const expectedResult = new Ok([]);
  expect(all(results)).toEqual(expectedResult);
});

it('all returns Err with all errors when input contains multiple Errs', () => {
  const results = [new Err('error1'), new Err('error2'), new Err('error3')];
  const expectedResult = new Err(['error1', 'error2', 'error3']);
  expect(all(results)).toEqual(expectedResult);
});
