import { expect, test } from 'vitest';
import { multiply } from '../number/multiply.js';
import { pipe } from './pipe.js';

test('passes values through each function', () => {
  const result = pipe(2, multiply(2));
  expect(result).toEqual(4);
});
