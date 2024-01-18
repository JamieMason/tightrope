import { expect, it } from 'vitest';
import { none, Some } from './index.js';
import { unwrap } from './unwrap.js';

it('unwrap should return the value when Some is provided', () => {
  const someValue = new Some(5);
  const result = unwrap(someValue);
  expect(result).toEqual(5);
});

it('unwrap should throw an error when None is provided', () => {
  expect(() => unwrap(none)).toThrow(
    'Called `Option.unwrap()` on a `None` value',
  );
});
