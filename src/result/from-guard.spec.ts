import { expect, expectTypeOf, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { fromGuard } from './from-guard.js';
import { Err, Ok, type Result } from './result.js';

interface Person {
  name: string;
}

function isPerson(value: unknown): value is Person {
  return typeof value === 'object' && value !== null && 'name' in value;
}

test('creates Ok when guard is passed', () => {
  const value: unknown = { name: 'Guybrush' };
  const result = pipe(value, fromGuard(isPerson, new Error('not a Person')));
  expect(result).toEqual(new Ok(value));
  expectTypeOf(result).toEqualTypeOf<Result<Person, Error>>();
});

test('creates Err when guard fails', () => {
  const value: unknown = { age: 23 };
  const result = pipe(value, fromGuard(isPerson, new Error('not a Person')));
  expect(result).toEqual(new Err(new Error('not a Person')));
  expectTypeOf(result).toEqualTypeOf<Result<Person, Error>>();
});
