import { expect, it } from 'vitest';
import { fromTry } from './from-try.js';
import { Err, Ok } from './index.js';

it.each([[1], [0], [true], [false], [null]])(
  'returns an Ok<%j> when function does not throw',
  value => {
    expect(fromTry(() => value)).toEqual(new Ok(value));
  },
);

it('returns an Err when function throws', () => {
  const err = new Error('wat');
  expect(
    fromTry(() => {
      throw err;
    }),
  ).toEqual(new Err(err));
});
