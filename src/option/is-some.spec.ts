import { expect, expectTypeOf, test } from 'vitest';
import { isSome } from './is-some.js';
import { Some } from './option.js';

test('isSome should return true when Some is provided', () => {
  expect.assertions(1);
  const someValue: unknown = Some.create(5);
  if (isSome(someValue)) {
    expect<Some<unknown>>(someValue).toEqual(Some.create(5));
  }
});

test('does not widen types of positive cases', () => {
  const value = Some.create<'hi'>('hi');
  expect(isSome(value)).toEqual(true);
  if (isSome(value)) {
    expectTypeOf(value).toEqualTypeOf<Some<'hi'>>();
  }
});

test('does not widen types of negative cases', () => {
  const value = 'hi' as const;
  expect(isSome(value)).toEqual(false);
  if (!isSome(value)) {
    expectTypeOf(value).toEqualTypeOf<'hi'>();
  }
});
