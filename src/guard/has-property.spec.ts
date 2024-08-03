import { expect, test } from 'vitest';
import { hasProperty } from './has-property.js';

test('positive case', () => {
  expect(hasProperty('foo', { foo: 'bar' })).toBe(true);
  expect(hasProperty('foo', { foo: undefined })).toBe(true);
});

test('negative case', () => {
  expect(hasProperty('foo', { bar: 'baz' })).toBe(false);
});

test('non-object input', () => {
  expect(hasProperty('foo', 'test')).toBe(false);
});

test('non-string property name', () => {
  expect(hasProperty(42 as any, { foo: 'bar' })).toBe(false);
});
