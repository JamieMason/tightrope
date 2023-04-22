import { expect, it } from 'vitest';
import '../../test/matchers';
import { pipe } from '../fn/pipe';
import { range } from './range';
import { reduceEach } from './reduce-each';

it('combines a series of values into one and yields each time', () => {
  expect(
    pipe(
      range(1, 5),
      reduceEach((sum, num) => sum + num, 0),
    ),
  ).toProduce([1, 3, 6, 10, 15]);
});
