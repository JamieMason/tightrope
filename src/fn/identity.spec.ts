import { expect, it } from 'vitest';
import { identity } from './identity';

it('returns the same value passed as argument', () => {
  expect(identity('hello')).toEqual('hello');
  expect(identity(42)).toEqual(42);
  expect(identity(true)).toEqual(true);
  expect(identity(undefined)).toEqual(undefined);
  expect(identity(null)).toEqual(null);
  const obj = { foo: 'bar' };
  expect(identity(obj)).toBe(obj);
});
