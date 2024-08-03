import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { isEvenNumber } from '../number/is-even-number.js';
import { filter } from './filter.js';
import { Err, Ok, type Result } from './result.js';

const getErrorValue = () => new Error('not an even number');

test('keep an Ok if its value passes the guard function', () => {
  const value = Ok.create<number, Error>(2);
  expect(pipe(value, filter(isEvenNumber, getErrorValue))).toBe<
    Result<number, Error>
  >(value);
});

test('discard an Ok if its value does not pass the guard function', () => {
  const value = Ok.create<number, Error>(3);
  expect(pipe(value, filter(isEvenNumber, getErrorValue))).toEqual<
    Result<number, Error>
  >(Err.create(getErrorValue()));
});

test('replace an Err with another Err', () => {
  const value = Err.create<Error, number>(new Error('Error: A'));
  expect(pipe(value, filter(isEvenNumber, getErrorValue))).toEqual<
    Result<number, Error>
  >(Err.create(getErrorValue()));
});

test('return an Err if value is not a Result', () => {
  const value: any = 'not a result';
  expect(pipe(value, filter(isEvenNumber, getErrorValue))).toEqual(
    Err.create(getErrorValue()),
  );
});
