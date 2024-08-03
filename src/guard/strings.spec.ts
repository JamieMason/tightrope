import * as fc from 'fast-check';
import { expect, test } from 'vitest';
import '../../test/matchers';
import { isBoolean } from './is-boolean.js';
import { isEmptyString } from './is-empty-string.js';
import { isJsonString } from './is-json-string.js';
import { isNonEmptyString } from './is-non-empty-string.js';
import { isString } from './is-string.js';
import { isVisibleString } from './is-visible-string.js';
import { isWhitespace } from './is-whitespace.js';

test('strings', () => {
  fc.assert(
    fc.property(fc.string(), value => {
      expect([value]).toPassGuard(isString);
      expect([isNonEmptyString(value)]).toPassGuard(isBoolean);
      expect([isEmptyString(value)]).toPassGuard(isBoolean);
      expect(isNonEmptyString(value)).not.toEqual(isEmptyString(value));
    }),
  );
});

test('JSON strings', () => {
  fc.assert(
    fc.property(fc.oneof(fc.json(), fc.unicodeJson()), value => {
      fc.pre(value !== 'null');
      expect([value]).toPassGuard(isJsonString);
    }),
  );
});

test('invisible strings', () => {
  const whitespaceChars = Object.values({
    Space: 32,
    'No-Break Space': 160,
    'En Quad': 8192,
    'Em Quad': 8193,
    'En Space': 8194,
    'Em Space': 8195,
    'Three-Per-Em Space': 8196,
    'Four-Per-Em Space': 8197,
    'Six-Per-Em Space': 8198,
    'Figure Space': 8199,
    'Punctuation Space': 8200,
    'Thin Space': 8201,
    'Hair Space': 8202,
    'Line Separator': 8232,
    'Medium Mathematical Space': 8287,
    'Ideographic Space': 12288,
  }).map(code => String.fromCharCode(code));

  fc.assert(
    fc.property(fc.stringOf(fc.constantFrom(...whitespaceChars)), value => {
      expect([value]).toPassGuard(isWhitespace);
      expect([value]).not.toPassGuard(isVisibleString);
    }),
  );
});
