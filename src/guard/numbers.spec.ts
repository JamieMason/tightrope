import * as fc from 'fast-check';
import { expect, test } from 'vitest';
import '../../test/matchers';
import { isArrayOfNumbers } from './is-array-of-numbers';
import { isBoolean } from './is-boolean';
import { isCalculable } from './is-calculable';
import { isDecimalNumber } from './is-decimal-number';
import { isEvenNumber } from './is-even-number';
import { isGreaterThan } from './is-greater-than';
import { isGreaterThanOrEqualTo } from './is-greater-than-or-equal-to';
import { isLessThan } from './is-less-than';
import { isLessThanOrEqualTo } from './is-less-than-or-equal-to';
import { isNegativeNumber } from './is-negative-number';
import { isNumber } from './is-number';
import { isOddNumber } from './is-odd-number';
import { isPositiveNumber } from './is-positive-number';
import { isWholeNumber } from './is-whole-number';
import { isWithinRange } from './is-within-range';

test('numbers', () => {
  fc.assert(
    fc.property(
      fc.oneof(
        fc.integer(),
        fc.nat(),
        fc.maxSafeInteger(),
        fc.maxSafeNat(),
        fc.float({ noNaN: true }),
        fc.double({ noNaN: true }),
      ),
      (value) => {
        expect([[value]]).toPassGuard(isArrayOfNumbers);
        expect([value]).toPassGuard(isNumber);
        expect([`${value}`]).toPassGuard(isCalculable);
        expect([isEvenNumber(value)]).toPassGuard(isBoolean);
        expect([isOddNumber(value)]).toPassGuard(isBoolean);
        expect(isEvenNumber(value)).not.toEqual(isOddNumber(value));
      },
    ),
  );
});

test('whole numbers', () => {
  fc.assert(
    fc.property(
      fc.oneof(fc.integer(), fc.maxSafeInteger(), fc.maxSafeNat()),
      (value) => {
        expect([value]).toPassGuard(isWholeNumber);
        expect([value]).not.toPassGuard(isDecimalNumber);
      },
    ),
  );
});

/** @todo https://github.com/dubzzz/fast-check/discussions/3658 */
/* eslint-disable-next-line */
test.skip('decimal numbers', () => {
  fc.assert(
    fc.property(fc.float(), (value) => {
      fc.pre(value !== 0);
      expect([value]).toPassGuard(isDecimalNumber);
      expect([value]).not.toPassGuard(isWholeNumber);
    }),
  );
});

test('positive numbers', () => {
  fc.assert(
    fc.property(
      fc.oneof(
        fc.integer(),
        fc.nat(),
        fc.maxSafeInteger(),
        fc.maxSafeNat(),
        fc.float(),
        fc.double(),
      ),
      (n) => {
        fc.pre(n > 0);
        expect([n]).toPassGuard(isPositiveNumber);
        expect([n]).not.toPassGuard(isNegativeNumber);
      },
    ),
  );
});

test('a < b', () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (a, b) => {
      fc.pre(a < b);
      // a < b
      expect([b, a]).toPassGuard(isLessThan);
      expect([b, a]).not.toPassGuard(isGreaterThan);
      // a > b
      expect([a, b]).toPassGuard(isGreaterThan);
      expect([a, b]).not.toPassGuard(isLessThan);
    }),
  );
});

test('a <= b', () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (a, b) => {
      fc.pre(a <= b);
      expect([b, a]).toPassGuard(isLessThanOrEqualTo);
    }),
  );
});

test('a >= b', () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), (a, b) => {
      fc.pre(a >= b);
      expect([b, a]).toPassGuard(isGreaterThanOrEqualTo);
    }),
  );
});

test('n >= floor && n <= ceiling', () => {
  fc.assert(
    fc.property(fc.nat(), fc.nat(), fc.nat(), (floor, n, ceiling) => {
      fc.pre(n >= floor && n <= ceiling);
      expect([floor, ceiling, n]).toPassGuard(isWithinRange);
    }),
  );
});
