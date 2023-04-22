import { expect, it } from 'vitest';
import { isGeneratorFunction } from './is-generator-function';

function* generatorExample() {
  yield 1;
}

async function* asyncGeneratorExample() {
  yield await Promise.resolve(1);
}

it('positive case - generator function', () => {
  expect(isGeneratorFunction(generatorExample)).toBe(true);
});

it('negative case - async generator function', () => {
  expect(isGeneratorFunction(asyncGeneratorExample)).toBe(false);
});

it('negative case - regular function', () => {
  const regularFunction = () => 42;
  expect(isGeneratorFunction(regularFunction)).toBe(false);
});

it('negative case - async function', async () => {
  const asyncFunction = async () => 42;
  expect(isGeneratorFunction(asyncFunction)).toBe(false);
});

it('negative case - non-function', () => {
  const nonFunction = 'hello';
  expect(isGeneratorFunction(nonFunction)).toBe(false);
});
