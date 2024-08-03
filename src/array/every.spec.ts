import { expect, test } from 'vitest';
import { every } from './every.js';

test('returns true if all values pass the guard', () => {
  const guard = (value: unknown): value is number => typeof value === 'number';
  const value: unknown = [1, 2, 3];
  if (every(guard, value)) {
    expect<number[]>(value).toBe(value);
  } else {
    throw new Error('Test failed');
  }
});
