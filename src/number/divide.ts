import { curry } from '../fn/curry.js';
import type { Result } from '../result/index.js';
import { Err, Ok } from '../result/index.js';

export type Divide = {
  (divisor: number): { (value: number): Result<number, Error> };
  (divisor: number, value: number): Result<number, Error>;
};

/**
 * Divide one number by another.
 *
 * @tags numbers, transform, transform-value
 */
export const divide: Divide = curry(
  (divisor: number, value: number): Result<number, Error> => {
    if (divisor === 0) {
      return new Err(new Error('Cannot divide by zero'));
    }
    return new Ok(value / divisor);
  },
  2,
);
