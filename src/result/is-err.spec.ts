import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { isErr } from './is-err.js';

it('only returns true if value is a Result.Err', () => {
  expect(isErr(Err.create(new Error('wat?')))).toEqual(true);
  expect(isErr(new Err(new Error('wat?')))).toEqual(true);
});

it('returns false unless value is a Result.Err', () => {
  [
    undefined,
    null,
    false,
    0,
    new Error(''),
    Ok.create(1),
    Ok.create(new Error('')),
  ].forEach((value) => {
    expect(isErr(value)).toEqual(false);
  });
});
