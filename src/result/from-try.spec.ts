import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { fromTry } from './from-try';

[1, 0, true, false, null].forEach((value) => {
  it(`returns an Ok<${value}> when function does not throw`, () => {
    expect(fromTry(() => value)).toEqual(new Ok(value));
  });
});

it('returns an Err when function throws', () => {
  const err = new Error('wat');
  expect(
    fromTry(() => {
      throw err;
    }),
  ).toEqual(new Err(err));
});
