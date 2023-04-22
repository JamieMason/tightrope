import { expect, it } from 'vitest';
import { isJsonString } from './is-json-string';

it('positive case - simple object', () => {
  expect(isJsonString('{"key": "value"}')).toBe(true);
});

it('positive case - simple array', () => {
  expect(isJsonString('[1, 2, 3]')).toBe(true);
});

it('positive case - nested object', () => {
  expect(isJsonString('{"key": {"nestedKey": "nestedValue"}}')).toBe(true);
});

it('positive case - null value', () => {
  expect(isJsonString('null')).toBe(true);
});

it('positive case - plain number', () => {
  expect(isJsonString('42')).toBe(true);
});

it('positive case - plain string', () => {
  expect(isJsonString('"hello"')).toBe(true);
});

it('negative case - missing closing brace', () => {
  expect(isJsonString('{"key": "value"')).toBe(false);
});

it('negative case - missing closing bracket', () => {
  expect(isJsonString('[1, 2, 3')).toBe(false);
});

it('negative case - invalid JSON', () => {
  expect(isJsonString('{ key: "value" }')).toBe(false);
});

it('negative case - plain string', () => {
  expect(isJsonString('This is not JSON')).toBe(false);
});

it('negative case - non-string input', () => {
  expect(isJsonString(42)).toBe(false);
});
