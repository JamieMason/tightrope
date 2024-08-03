import { expect, test } from 'vitest';
import { Some, none } from './option.js';
import { unwrap } from './unwrap.js';

test('unwrap should return the value when Some is provided', () => {
  const someValue = Some.create(5);
  const result = unwrap(someValue);
  expect<number>(result).toEqual(5);
});

test('unwrap should throw an error when None is provided', () => {
  expect(() => unwrap(none)).toThrow('Called `unwrap()` on a `None` value');
});
