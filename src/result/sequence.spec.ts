import { expect, it } from 'vitest';
import type { Result } from '.';
import { Err, Ok } from '.';
import { sequence } from './sequence';

it('sequence returns Ok with an array of values when all input Results are Ok', () => {
  const results = [new Ok(1), new Ok(2), new Ok(3)];
  const expectedResult = new Ok([1, 2, 3]);
  expect(sequence(results)).toEqual(expectedResult);
});

it('sequence returns the first Err encountered when input Results contain an Err', () => {
  const results = [new Ok(1), new Err('error'), new Ok(3)];
  const expectedResult = new Err('error');
  expect(sequence(results)).toEqual(expectedResult);
});

it('sequence returns Ok with an empty array when input is an empty array', () => {
  const results: Result<number, string>[] = [];
  const expectedResult = new Ok([]);
  expect(sequence(results)).toEqual(expectedResult);
});

it('sequence returns Err when input contains multiple Errs and stops at the first encountered Err', () => {
  const results = [new Ok(1), new Err('error1'), new Ok(3), new Err('error2')];
  const expectedResult = new Err('error1');
  expect(sequence(results)).toEqual(expectedResult);
});
