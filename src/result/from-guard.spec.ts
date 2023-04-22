import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { pipe } from '../fn/pipe';
import { isEvenNumber } from '../guard/is-even-number';
import { fromGuard } from './from-guard';

it('creates Ok when guard is passed', () => {
  expect(
    pipe(
      100,
      fromGuard(isEvenNumber, new Error('Initial value is not an even number')),
    ),
  ).toEqual(new Ok(100));
});

it('creates Err when guard fails', () => {
  expect(
    pipe(
      3,
      fromGuard(isEvenNumber, new Error('Initial value is not an even number')),
    ),
  ).toEqual(new Err(new Error('Initial value is not an even number')));
});
