import { expect, it } from 'vitest';
import { nothing, Just } from '.';
import { isNothing } from './is-nothing';

it('positive case - Nothing object', () => {
  expect(isNothing(nothing)).toBe(true);
});

it('negative case - Just object', () => {
  expect(isNothing(new Just(false))).toBe(false);
});

it('negative case - non-maybe object', () => {
  const nonOptionObj = { foo: 'bar' };
  expect(isNothing(nonOptionObj)).toBe(false);
});
