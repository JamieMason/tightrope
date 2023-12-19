import { expect, it } from 'vitest';
import { Err, Ok } from '.';
import { isNothing } from '../maybe/IsNothing.gen';
import { isJust } from '../maybe/is-just';
import { unwrap } from '../maybe/unwrap';
import { ok } from './ok';

it('transforms an Ok to a Just', () => {
  const result = new Ok(42);
  const maybe = ok(result);
  expect(isJust(maybe)).toBe(true);
  expect(unwrap(maybe)).toBe(42);
});

it('transforms an Err to a Nothing', () => {
  const result = new Err('error message');
  const maybe = ok(result);
  expect(isNothing(maybe)).toBe(true);
});
