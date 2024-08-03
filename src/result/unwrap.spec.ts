import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { Err, Ok } from './result.js';
import { unwrap } from './unwrap.js';

test('returns the wrapped value from an Ok', () => {
  expect(pipe(Ok.create(2), unwrap)).toEqual(2);
});

test('throws when value is an Err', () => {
  expect(() => pipe(Err.create(new Error('wat')), unwrap)).toThrow(
    new Error('wat'),
  );
  expect(() => pipe(Err.create('wut'), unwrap)).toThrow(new Error('wut'));
});
