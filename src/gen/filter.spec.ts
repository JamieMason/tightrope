import { expect, test, vi } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { isEvenNumber } from '../number/is-even-number.js';
import { multiply } from '../number/multiply.js';
import { filter } from './filter.js';
import { map } from './map.js';
import { range } from './range.js';

test('filters values and short-circuits on values failing guard', () => {
  const $isEvenNumber = vi.fn(isEvenNumber);
  const $double = vi.fn(multiply(2));

  const oddAndEven = range(1, 5);
  const keepEven = filter($isEvenNumber as unknown as typeof isEvenNumber);
  const doubleEvens = map($double);

  expect(pipe(oddAndEven, keepEven, doubleEvens)).toProduce([4, 8]);
  expect($isEvenNumber).toHaveBeenCalledTimes(5);
  expect($double).toHaveBeenCalledTimes(2);
});
