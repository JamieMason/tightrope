import { expect, test } from 'vitest';
import { isIso8601 } from '../string/is-iso8601.js';

test('positive case - date', () => {
  expect(isIso8601('1999-12-31')).toBe(true);
});

test('positive case - date and time', () => {
  expect(isIso8601('1999-12-31T23:59')).toBe(true);
});

test('positive case - date, time, and seconds', () => {
  expect(isIso8601('1999-12-31T23:59:59')).toBe(true);
});

test('positive case - date, time, seconds, and milliseconds', () => {
  expect(isIso8601('1999-12-31T23:59:59.000')).toBe(true);
});

test('positive case - date, time, seconds, milliseconds, and timezone', () => {
  expect(isIso8601('1999-12-31T23:59:59.000Z')).toBe(true);
});

test('negative case - invalid date', () => {
  expect(isIso8601('1999-13-31')).toBe(false);
});

test('negative case - invalid time', () => {
  expect(isIso8601('1999-12-31T25:59')).toBe(false);
});

test('negative case - non-string input', () => {
  expect(isIso8601(19991231)).toBe(false);
});

test('positive case - ISO 8601 with timezone offset (hours)', () => {
  expect(isIso8601('2021-01-01T00:00:00+01:00')).toBe(true);
});

test('positive case - ISO 8601 with timezone offset (hours and minutes)', () => {
  expect(isIso8601('2021-01-01T00:00:00-01:30')).toBe(true);
});

test('positive case - ISO 8601 with timezone offset and milliseconds', () => {
  expect(isIso8601('2021-01-01T00:00:00.123+01:00')).toBe(true);
});

test('positive case - ISO 8601 with timezone offset and milliseconds (negative offset)', () => {
  expect(isIso8601('2021-01-01T00:00:00.123-01:00')).toBe(true);
});

test('negative case - invalid timezone offset format', () => {
  expect(isIso8601('2021-01-01T00:00:00+0100')).toBe(false);
});

test('negative case - invalid year format', () => {
  expect(isIso8601('21-01-01T00:00:00')).toBe(false);
});

test('negative case - invalid month format', () => {
  expect(isIso8601('2021-1-01T00:00:00')).toBe(false);
});

test('negative case - invalid day format', () => {
  expect(isIso8601('2021-01-1T00:00:00')).toBe(false);
});

test('negative case - invalid hour format', () => {
  expect(isIso8601('2021-01-01T0:00:00')).toBe(false);
});

test('negative case - invalid minute format', () => {
  expect(isIso8601('2021-01-01T00:0:00')).toBe(false);
});

test('negative case - invalid second format', () => {
  expect(isIso8601('2021-01-01T00:00:0')).toBe(false);
});

test('negative case - invalid milliseconds format', () => {
  expect(isIso8601('2021-01-01T00:00:00.12')).toBe(false);
});

test('negative case - invalid timezone offset separator', () => {
  expect(isIso8601('2021-01-01T00:00:00-0100')).toBe(false);
});

test('negative case - invalid timezone offset hours', () => {
  expect(isIso8601('2021-01-01T00:00:00+24:00')).toBe(false);
});

test('negative case - invalid timezone offset minutes', () => {
  expect(isIso8601('2021-01-01T00:00:00+00:60')).toBe(false);
});
