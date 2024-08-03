import { expect, test } from 'vitest';
import { isAsymmetricMatcher } from './is-asymmetric-matcher.js';

test.each([
  [{ asymmetricMatch: () => true }, true],
  [{ asymmetricMatch: null }, false],
  [{}, false],
  [null, false],
  [undefined, false],
])('isAsymmetricMatcher(%s) should be %j', (value, expected) => {
  expect(isAsymmetricMatcher(value)).toEqual(expected);
});
