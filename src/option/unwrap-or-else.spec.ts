import { expect, test } from 'vitest';
import { None, Some } from './option.js';
import { unwrapOrElse } from './unwrap-or-else.js';

test('unwrapOrElse should return the value when Some is provided', () => {
  const someValue = Some.create(5);
  const result = unwrapOrElse(() => 10, someValue);
  expect(result).toEqual(5);
});

test('unwrapOrElse should return the computed value when None is provided', () => {
  const result = unwrapOrElse(() => 10, None.create<number>());
  expect(result).toEqual(10);
});
