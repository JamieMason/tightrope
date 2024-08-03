import { expect, it } from 'vitest';
import { Some, none } from './index.js';
import { unwrapOrElse } from './unwrap-or-else.js';

it('unwrapOrElse should return the value when Some is provided', () => {
  const someValue = new Some(5);
  const result = unwrapOrElse(() => 10, someValue);
  expect(result).toEqual(5);
});

it('unwrapOrElse should return the computed value when None is provided', () => {
  const result = unwrapOrElse(() => 10, none);
  expect(result).toEqual(10);
});
