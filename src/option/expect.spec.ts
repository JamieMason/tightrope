import { expect as vExpect, it } from 'vitest';
import { none, Some } from '.';
import { expect } from './expect';

it('expect returns value when input is Some', () => {
  const opt = new Some(2);
  const msg = 'Error: Expected a Some but received None';
  vExpect(expect(msg, opt)).toEqual(2);
});

it('expect throws an error with the provided message when input is None', () => {
  const msg = 'Error: Expected a Some but received None';
  vExpect(() => expect(msg, none)).toThrow(msg);
});

it('expect handles complex types', () => {
  const opt = new Some({ value: 2 });
  const msg = 'Error: Expected a Some but received None';
  vExpect(expect(msg, opt)).toEqual({ value: 2 });
});
