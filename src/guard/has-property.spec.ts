import { expect, it } from 'vitest';
import { hasProperty } from './has-property.js';

it('positive case', () => {
  expect(hasProperty('foo', { foo: 'bar' })).toBe(true);
  expect(hasProperty('foo', { foo: undefined })).toBe(true);
});

it('negative case', () => {
  expect(hasProperty('foo', { bar: 'baz' })).toBe(false);
});

it('non-object input', () => {
  expect(hasProperty('foo', 'test')).toBe(false);
});

it('non-string property name', () => {
  expect(hasProperty(42 as any, { foo: 'bar' })).toBe(false);
});
