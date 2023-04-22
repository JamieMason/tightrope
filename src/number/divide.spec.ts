import { expect, it } from 'vitest';
import { Err, Ok } from '../result';
import { divide } from './divide';

it('returns the quotient of two positive numbers', () => {
  expect(divide(5, 15)).toEqual(new Ok(3));
});

it('returns the quotient of a positive number and a negative number', () => {
  expect(divide(3, -6)).toEqual(new Ok(-2));
});

it('returns the quotient of two negative numbers', () => {
  expect(divide(-4, -12)).toEqual(new Ok(3));
});

it('returns an error when dividing by zero', () => {
  expect(divide(0, 5)).toEqual(new Err(new Error('Cannot divide by zero')));
});
