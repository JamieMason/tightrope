import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { pipe } from '../fn/pipe.js';
import { unwrap } from './unwrap.js';

it('returns the wrapped value from an Ok', () => {
  expect(pipe(Ok.create(2), unwrap)).toEqual(2);
});

it('throws when value is an Err', () => {
  expect(() => pipe(Err.create(new Error('wat')), unwrap)).toThrow(
    new Error('wat'),
  );
  expect(() => pipe(Err.create('wut'), unwrap)).toThrow(new Error('wut'));
});
