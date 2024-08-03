import type { Gen } from '../gen/index.js';
import { hasType } from '../guard/has-type.js';

/**
 * Asserts that a value is a `Function` using `yield` syntax.
 *
 * @tags guard, functions, generator
 */
export const isGeneratorFunction = <G extends Gen.Any>(
  value: G | unknown,
): value is G extends Gen.Any ? G : Gen.Any =>
  hasType<Generator>('GeneratorFunction', value);
