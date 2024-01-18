import { expect, it } from 'vitest';
import '../../test/matchers';
import { unwrap } from '../result/unwrap.js';
import { get } from './get.js';
import { pipe } from './pipe.js';

const obj = { foo: { bar: 42 }, baz: null };

it('returns Ok containing value at the specified path', () => {
  expect(get(obj, 'foo', 'bar')).toBeOkOf(42);
});

it('returns Err for non-existent paths', () => {
  expect(get(obj, 'qux' as any)).toBeErrOf(
    new Error('Property "qux" not found on value: [object Object]'),
  );
});

it('returns Err for non-readable objects', () => {
  expect(get(null, 'foo', 'bar', 'baz')).toBeErrOf(
    new Error('Cannot read "foo.bar.baz" from unreadable value: null'),
  );
  expect(get(undefined, 'foo', 'bar', 'baz')).toBeErrOf(
    new Error('Cannot read "foo.bar.baz" from unreadable value: undefined'),
  );
  expect(get(obj.baz, 'foo', 'bar', 'baz')).toBeErrOf(
    new Error('Cannot read "foo.bar.baz" from unreadable value: null'),
  );
});

it('handles deeply nested paths', () => {
  const obj = { foo: { bar: { baz: { qux: 42 } } } };
  expect(get(obj, 'foo', 'bar', 'baz', 'qux')).toBeOkOf(42);
});

it('handles array indexes', () => {
  const obj = { foo: { bar: [1, { baz: 42 }] } };
  expect((get as any)(obj, 'foo', 'bar', 1, 'baz')).toBeOkOf(42);
});

it('returns Ok containing undefined value when property exists', () => {
  expect(
    get({ foo: { undefinedProp: undefined } }, 'foo', 'undefinedProp'),
  ).toBeOkOf(undefined);
});

it('returns Err for paths deeper than the object', () => {
  const obj = { foo: { bar: 42, baz: null } };
  expect(get(obj, 'foo', 'bar', 'baz' as any, 'qux')).toBeErrOf(
    new Error('Property "baz" not found on value: 42'),
  );
  expect(get(obj, 'foo', 'baz', 'qux')).toBeErrOf(
    new Error('Cannot read "qux" from unreadable value: null'),
  );
});

it('returns Ok for properties of primitives', () => {
  const obj = { foo: 'hello' };
  expect(pipe(get(obj, 'foo', 'toUpperCase'), unwrap, (fn) => fn())).toEqual(
    'HELLO',
  );
});
