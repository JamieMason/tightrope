import { expect, test } from 'vitest';
import { isJsonString } from './is-json-string.js';

test('positive case - simple object', () => {
  expect(isJsonString('{"key": "value"}')).toBe(true);
});

test('positive case - simple array', () => {
  expect(isJsonString('[1, 2, 3]')).toBe(true);
});

test('positive case - nested object', () => {
  expect(isJsonString('{"key": {"nestedKey": "nestedValue"}}')).toBe(true);
});

test('positive case - null value', () => {
  expect(isJsonString('null')).toBe(true);
});

test('positive case - plain number', () => {
  expect(isJsonString('42')).toBe(true);
});

test('positive case - plain string', () => {
  expect(isJsonString('"hello"')).toBe(true);
});

test('negative case - missing closing brace', () => {
  expect(isJsonString('{"key": "value"')).toBe(false);
});

test('negative case - missing closing bracket', () => {
  expect(isJsonString('[1, 2, 3')).toBe(false);
});

test('negative case - invalid JSON', () => {
  expect(isJsonString('{ key: "value" }')).toBe(false);
});

test('negative case - plain string', () => {
  expect(isJsonString('This is not JSON')).toBe(false);
});

test('negative case - non-string input', () => {
  expect(isJsonString(42)).toBe(false);
});
