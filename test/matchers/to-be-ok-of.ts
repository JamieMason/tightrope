import { expect } from 'vitest';
import { isOk } from '../../src/result/is-ok.js';
import { Ok } from '../../src/result/result.js';

expect.extend({
  toBeOkOf(actual: any, expected: any) {
    return {
      actual,
      message: () =>
        this.utils.matcherHint(
          'toBeOkOf',
          this.utils.printReceived(actual),
          this.utils.printExpected(new Ok(expected)),
          {
            comment: 'Ok',
            isNot: this.isNot,
            promise: this.promise,
          },
        ),
      pass: isOk(actual) && this.equals(actual.value, expected),
    };
  },
});
