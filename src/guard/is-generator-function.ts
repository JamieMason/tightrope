import { hasType } from './has-type.js';

/**
 * Asserts that a value is a `Function` using `yield` syntax.
 *
 * @tags guard, functions, generator
 */
export const isGeneratorFunction = hasType<Generator>('GeneratorFunction');
