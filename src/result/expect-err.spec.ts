import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { expectErr } from './expect-err';

it('throws if value is Ok', () => {
  expect(() => {
    pipe(Ok.create(1), expectErr('wat?'));
  }).toThrow(new Error('wat?'));
});

it('returns the wrapped Error if value is Err', () => {
  expect(pipe(Err.create(new Error('upstream')), expectErr('wat?'))).toEqual(
    new Error('upstream'),
  );
});
