import { expect, test } from 'vitest';
import { expect as expectSome } from './expect.js';
import { Some, none } from './option.js';

test('expect returns value when input is Some', () => {
  const opt = Some.create(2);
  const msg = 'Error: Expected a Some but received None';
  const output = expectSome(msg, opt);
  expect<number>(output).toEqual(2);
});

test('expect throws an error with the provided message when input is None', () => {
  const msg = 'Error: Expected a Some but received None';
  expect(() => expectSome(msg, none)).toThrow(msg);
});

test('expect handles complex types', () => {
  type Obj = { value: number };
  const opt = Some.create({ value: 2 });
  const msg = 'Error: Expected a Some but received None';
  const output = expectSome(msg, opt);
  expect<Obj>(output).toEqual({ value: 2 });
});
