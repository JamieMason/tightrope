import { expect, expectTypeOf, test } from 'vitest';
import { fromTry } from './from-try.js';
import { Err, Ok, type Result } from './result.js';

test.each([[1], [0], [true], [false], [null]])(
  'returns an Ok<%j> when function does not throw',
  value => {
    expect(fromTry(() => value)).toEqual(new Ok(value));
  },
);

test('returns an Err when function throws', () => {
  const err = new Error('wat');
  expect(
    fromTry(() => {
      throw err;
    }),
  ).toEqual(new Err(err));
});

test('infers type from function', () => {
  expect.assertions(1);
  const value = 'yep' as const;
  const ok = fromTry(() => value);
  expect(ok).toEqual(new Ok(value));
  expectTypeOf(ok).toEqualTypeOf<Result<'yep', unknown>>();
});
