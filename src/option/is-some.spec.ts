import { expect, it } from 'vitest';
import { none, Some } from '.';
import { isSome } from './is-some';

it('isSome should return true when Some is provided', () => {
  expect.assertions(1);
  const someValue: unknown = new Some(5);
  if (isSome(someValue)) {
    expect<Some<unknown>>(someValue).toEqual(new Some(5));
  }
});

it('isSome should return false when None is provided', () => {
  expect(isSome(none)).toEqual(false);
});

it('isSome should return false and preserve type when number is provided', () => {
  expect.assertions(1);
  const someValue: number = 8;
  if (isSome(someValue) === false) {
    expect<number>(someValue).toEqual(8);
  }
});
