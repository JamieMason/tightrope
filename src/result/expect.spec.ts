import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { expect as expectFn } from './expect.js';
import { Err, Ok } from './result.js';

test('throws if value is Err', () => {
  expect(() => {
    pipe(Err.create(new Error('upstream')), expectFn('wat?'));
  }).toThrow(new Error('wat?: Error: upstream'));
});

test('returns the wrapped value if Ok', () => {
  expect(pipe(Ok.create(1), expectFn('wat?'))).toEqual(1);
});
