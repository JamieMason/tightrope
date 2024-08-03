import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { expectErr } from './expect-err.js';
import { Err, Ok } from './result.js';

test('throws if value is Ok', () => {
  expect(() => {
    pipe(Ok.create(1), expectErr('wat?'));
  }).toThrow(new Error('wat?'));
});

test('returns the wrapped Error if value is Err', () => {
  expect(pipe(Err.create(new Error('upstream')), expectErr('wat?'))).toEqual(
    new Error('upstream'),
  );
});
