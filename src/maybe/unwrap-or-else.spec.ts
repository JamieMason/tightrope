import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { unwrapOrElse } from './unwrap-or-else';

it('unwrapOrElse should return the value when Just is provided', () => {
  const someValue = new just(5);
  const result = unwrapOrElse(() => 10, someValue);
  expect(result).toEqual(5);
});

it('unwrapOrElse should return the computed value when Nothing is provided', () => {
  const result = unwrapOrElse(() => 10, nothing);
  expect(result).toEqual(10);
});
