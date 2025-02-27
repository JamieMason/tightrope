import { expect, test, vi } from 'vitest';
import { tap } from './tap.js';

test('calls the given function with the given value and returns the given value', () => {
  const spy = vi.fn();
  expect(tap(spy, 42)).toEqual(42);
  expect(spy).toHaveBeenCalledWith(42);
});
