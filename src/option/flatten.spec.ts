import { expect, it } from 'vitest';
import { flatten } from './flatten.js';
import type { Option } from './index.js';
import { Some, none } from './index.js';

it('flatten returns inner Some when input is Some(Some)', () => {
  const opt = new Some(new Some(2));
  const output = flatten(opt);
  expect<Option<number>>(output).toEqual(new Some(2));
});

it('flatten returns None when input is Some(None)', () => {
  const inner = none;
  const opt = new Some(inner);
  const output = flatten(opt);
  expect<Option<unknown>>(output).toEqual(none);
});

it('flatten returns None when input is None', () => {
  const output = flatten(none);
  expect<Option<unknown>>(output).toEqual(none);
});

it('flatten handles complex types', () => {
  type Obj = { value: number };
  const opt = new Some(new Some({ value: 2 }));
  const output = flatten(opt);
  expect<Option<Obj>>(output).toEqual(new Some({ value: 2 }));
});
