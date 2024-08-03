import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { range } from './range.js';
import { reduceEach } from './reduce-each.js';

test('combines a series of values into one and yields each time', () => {
  expect(
    pipe(
      range(1, 5),
      reduceEach((sum, num) => sum + num, 0),
    ),
  ).toProduce([1, 3, 6, 10, 15]);
});
