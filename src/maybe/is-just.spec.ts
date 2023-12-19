import { expect, it } from 'vitest';
import { just, nothing } from './Maybe.gen';
import { isJust } from './is-just';

it('isJust should return true when Just is provided', () => {
  expect.assertions(1);
  const someValue: unknown = just(5);
  if (isJust(someValue)) {
    expect<typeof just<unknown>>(someValue).toEqual(just(5));
  }
});

it('isJust should return false when Nothing is provided', () => {
  expect(isJust(nothing)).toEqual(false);
});

it('isJust should return false and preserve type when number is provided', () => {
  expect.assertions(1);
  const someValue: number = 8;
  if (isJust(someValue) === false) {
    expect<number>(someValue).toEqual(8);
  }
});
