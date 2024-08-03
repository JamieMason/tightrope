import { expect, test } from 'vitest';
import { isEvenNumber } from '../number/is-even-number.js';
import { multiply } from '../number/multiply.js';
import { filter } from '../result/filter.js';
import { map } from '../result/map.js';
import { Err, Ok } from '../result/result.js';
import { flow } from './flow.js';

test('executes functions from left to right', () => {
  const transform = flow(
    Ok.create<number>,
    map(multiply(3)),
    filter(isEvenNumber, () => 'not an even number'),
  );
  expect(transform(2)).toEqual(new Ok(6));
  expect(transform(3)).toEqual(new Err('not an even number'));
});
