import { expect, it } from 'vitest';
import { nothing, just } from './Maybe.gen';
import { isNothing } from './IsNothing.gen';

it('positive case - Nothing object', () => {
  expect(isNothing(nothing)).toBe(true);
});

it('negative case - Just object', () => {
  expect(isNothing(just(false))).toBe(false);
});

it('negative case - non-maybe object', () => {
  const nonOptionObj = { foo: 'bar' };
  expect(isNothing(nonOptionObj as any)).toBe(false);
});
