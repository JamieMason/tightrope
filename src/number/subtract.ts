import { curry } from '../fn/curry';

type Subtract = {
  (amount: number): { (value: number): number };
  (amount: number, value: number): number;
};

/**
 * Subtract one number from another
 *
 * @tags numbers, transform, transform-value
 */
export const subtract: Subtract = curry(
  (amount: number, value: number): number => value - amount,
  2,
);
