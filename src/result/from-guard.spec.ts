import { expect, it } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { isEvenNumber } from '../guard/is-even-number.js';
import { fromGuard } from './from-guard.js';
import { Err, Ok } from './index.js';

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
