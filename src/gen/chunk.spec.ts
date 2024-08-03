import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { chunk } from './chunk.js';

test('yields batches of the given size', () => {
  expect(pipe([1, 2, 3, 4, 5], chunk(2))).toProduce([[1, 2], [3, 4], [5]]);
  expect(pipe([], chunk(2))).toProduce([]);
});
