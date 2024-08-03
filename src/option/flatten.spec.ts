import { expect, test } from 'vitest';
import { flatten } from './flatten.js';
import type { Option } from './option.js';
import { Some, none } from './option.js';

test('flatten returns inner Some when input is Some(Some)', () => {
  const opt = Some.create(Some.create(2));
  const output = flatten(opt);
  expect<Option<number>>(output).toEqual(Some.create(2));
});

test('flatten returns None when input is Some(None)', () => {
  const inner = none;
  const opt = Some.create(inner);
  const output = flatten(opt);
  expect<Option<unknown>>(output).toEqual(none);
});

test('flatten returns None when input is None', () => {
  const output = flatten(none);
  expect<Option<unknown>>(output).toEqual(none);
});

test('flatten handles complex types', () => {
  type Obj = { value: number };
  const opt = Some.create(Some.create({ value: 2 }));
  const output = flatten(opt);
  expect<Option<Obj>>(output).toEqual(Some.create({ value: 2 }));
});
