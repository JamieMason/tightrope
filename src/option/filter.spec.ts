import { expect, it } from 'vitest';
import { none, Some } from '.';
import { filter } from './filter';

it('filter returns Some when predicate is true', () => {
  const opt = new Some(2);
  const predicate = (x: number) => x % 2 === 0;
  expect(filter(predicate, opt)).toEqual(new Some(2));
});

it('filter returns None when predicate is false', () => {
  const opt = new Some(3);
  const predicate = (x: number) => x % 2 === 0;
  expect(filter(predicate, opt)).toEqual(none);
});

it('filter returns None when input is None', () => {
  const predicate = (x: number) => x % 2 === 0;
  expect(filter(predicate, none)).toEqual(none);
});

it('filter handles complex types', () => {
  const opt = new Some({ value: 2 });
  const predicate = (obj: { value: number }) => obj.value % 2 === 0;
  expect(filter(predicate, opt)).toEqual(new Some({ value: 2 }));
});
