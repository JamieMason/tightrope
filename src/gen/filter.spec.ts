import { expect, it, vi } from 'vitest';
import '../../test/matchers';
import { pipe } from '../fn/pipe';
import { isEvenNumber } from '../guard/is-even-number';
import { multiply } from '../number/multiply';
import { filter } from './filter';
import { map } from './map';
import { range } from './range';

it('filters values and short-circuits on values failing guard', () => {
  const $isEvenNumber = vi.fn(isEvenNumber);
  const $double = vi.fn(multiply(2));

  const oddAndEven = range(1, 5);
  const keepEven = filter($isEvenNumber);
  const doubleEvens = map($double);

  expect(pipe(oddAndEven, keepEven, doubleEvens)).toProduce([4, 8]);
  expect($isEvenNumber).toHaveBeenCalledTimes(5);
  expect($double).toHaveBeenCalledTimes(2);
});
