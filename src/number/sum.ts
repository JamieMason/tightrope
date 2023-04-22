import { curry } from '../fn/curry';

type Sum = {
  (amount: number): { (value: number): number };
  (amount: number, value: number): number;
};

/**
 * Return the sum of two numbers
 *
 * @tags numbers, transform, transform-value
 */
export const sum: Sum = curry(
  (amount: number, value: number): number => value + amount,
  2,
);
