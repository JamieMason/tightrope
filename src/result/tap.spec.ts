import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { Err, Ok } from './result.js';
import { tap } from './tap.js';

test('calls the effect with the value from an Ok', () => {
  const spy = vi.fn();
  pipe(Ok.create(2), tap(spy));
  expect(spy).toHaveBeenCalledWith(2);
});

test('returns an Err if the effect throws', () => {
  expect(
    pipe(
      Ok.create(2),
      tap(() => {
        throw new Error('wat?');
      }),
    ),
  ).toEqual(Err.create(new Error('wat?')));
});

test('skip the effect when value is an Err', () => {
  const spy = vi.fn();
  pipe(Err.create(new Error('wat?')), tap(spy));
  expect(spy).not.toHaveBeenCalled();
});
