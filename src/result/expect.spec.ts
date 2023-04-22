import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { expect as expectFn } from './expect';

it('throws if value is Err', () => {
  expect(() => {
    pipe(Err.create(new Error('upstream')), expectFn('wat?'));
  }).toThrow(new Error('wat?: Error: upstream'));
});

it('returns the wrapped value if Ok', () => {
  expect(pipe(Ok.create(1), expectFn('wat?'))).toEqual(1);
});
