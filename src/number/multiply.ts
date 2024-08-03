import { curry } from '../fn/curry.js';

type Multiply = {
  (multiplier: number): (value: number) => number;
  (multiplier: number, value: number): number;
};

/**
 * Multiply two numbers
 *
 * @tags numbers, transform, transform-value
 */
export const multiply: Multiply = curry(
  (multiplier: number, value: number): number => value * multiplier,
  2,
);
