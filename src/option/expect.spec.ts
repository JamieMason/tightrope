import { it, expect as vExpect } from 'vitest';
import { expect } from './expect.js';
import { Some, none } from './index.js';

it('expect returns value when input is Some', () => {
  const opt = new Some(2);
  const msg = 'Error: Expected a Some but received None';
  const output = expect(msg, opt);
  vExpect<number>(output).toEqual(2);
});

it('expect throws an error with the provided message when input is None', () => {
  const msg = 'Error: Expected a Some but received None';
  vExpect(() => expect(msg, none)).toThrow(msg);
});

it('expect handles complex types', () => {
  type Obj = { value: number };
  const opt = new Some({ value: 2 });
  const msg = 'Error: Expected a Some but received None';
  const output = expect(msg, opt);
  vExpect<Obj>(output).toEqual({ value: 2 });
});
