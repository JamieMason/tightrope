import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { range } from './range.js';
import { reduce } from './reduce.js';

test('combines a series of values into one and yields when upstream is done', () => {
  expect(
    pipe(
      range(1, 5),
      reduce((sum, num) => sum + num, 0),
    ),
  ).toProduce([15]);
});
