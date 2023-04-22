import { expect, it } from 'vitest';
import '../../test/matchers';
import { isEvenNumber } from '../guard/is-even-number';
import { multiply } from '../number/multiply';
import { Err, Ok } from '../result';
import { filter } from '../result/filter';
import { map } from '../result/map';
import { flow } from './flow';

it('executes functions from left to right', () => {
  const transform = flow(
    Ok.create<number>,
    map(multiply(3)),
    filter(isEvenNumber, 'not an even number'),
  );
  expect(transform(2)).toEqual(new Ok(6));
  expect(transform(3)).toEqual(new Err(new Error('not an even number: 9')));
});
