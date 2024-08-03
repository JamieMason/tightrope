import { expect, test } from 'vitest';
import type { Gen } from '../gen/index.js';
import { isGeneratorFunction } from './is-generator-function.js';

function* generatorExample() {
  yield 1;
}

async function* asyncGeneratorExample() {
  yield await Promise.resolve(1);
}

test('positive case - generator function', () => {
  expect(isGeneratorFunction(generatorExample)).toBe(true);
});

test('negative case - async generator function', () => {
  expect(isGeneratorFunction(asyncGeneratorExample)).toBe(false);
});

test('negative case - regular function', () => {
  const regularFunction = () => 42;
  expect(isGeneratorFunction(regularFunction)).toBe(false);
});

test('negative case - async function', () => {
  const asyncFunction = async () => 42;
  expect(isGeneratorFunction(asyncFunction)).toBe(false);
});

test('negative case - non-function', () => {
  const nonFunction = 'hello';
  expect(isGeneratorFunction(nonFunction)).toBe(false);
});

test('does not widen types of positive cases', () => {
  const generator = generatorExample();
  if (isGeneratorFunction(generatorExample)) {
    expect<Gen.Of<number>>(generator).toBe(generator);
  }
});
