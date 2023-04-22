import { expect, it } from 'vitest';
import '../../test/matchers';
import { pipe } from '../fn/pipe';
import { range } from './range';
import { reduce } from './reduce';

it('combines a series of values into one and yields when upstream is done', () => {
  expect(
    pipe(
      range(1, 5),
      reduce((sum, num) => sum + num, 0),
    ),
  ).toProduce([15]);
});
