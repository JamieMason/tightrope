import { expect as vExpect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { expect } from './expect';

it('expect returns value when input is Just', () => {
  const opt = new just(2);
  const msg = 'Error: Expected a Just but received Nothing';
  const output = expect(msg, opt);
  vExpect<number>(output).toEqual(2);
});

it('expect throws an error with the provided message when input is Nothing', () => {
  const msg = 'Error: Expected a Just but received Nothing';
  vExpect(() => expect(msg, nothing)).toThrow(msg);
});

it('expect handles complex types', () => {
  type Obj = { value: number };
  const opt = new just({ value: 2 });
  const msg = 'Error: Expected a Just but received Nothing';
  const output = expect(msg, opt);
  vExpect<Obj>(output).toEqual({ value: 2 });
});
