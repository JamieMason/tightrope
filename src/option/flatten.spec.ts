import { expect, it } from 'vitest';
import { none, Some } from '.';
import { flatten } from './flatten';

it('flatten returns inner Some when input is Some(Some)', () => {
  const opt = new Some(new Some(2));
  expect(flatten(opt)).toEqual(new Some(2));
});

it('flatten returns None when input is Some(None)', () => {
  const opt = new Some(none);
  expect(flatten(opt)).toEqual(none);
});

it('flatten returns None when input is None', () => {
  expect(flatten(none)).toEqual(none);
});

it('flatten handles complex types', () => {
  const opt = new Some(new Some({ value: 2 }));
  expect(flatten(opt)).toEqual(new Some({ value: 2 }));
});
