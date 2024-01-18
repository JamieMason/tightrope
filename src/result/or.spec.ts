import { expect, it } from 'vitest';
import { Err, Ok } from './index.js';
import { pipe } from '../fn/pipe.js';
import { or } from './or.js';

it('returns the provided Ok when Err', () => {
  expect(pipe(Err.create(new Error('wat?')), or(Ok.create(2)))).toEqual(
    Ok.create(2),
  );
});

it('keeps the original Ok when Ok', () => {
  expect(pipe(Ok.create(2), or(Ok.create(4)))).toEqual(Ok.create(2));
});
