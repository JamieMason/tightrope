import { expect } from 'vitest';
import { Ok } from '../../src/result/index.js';
import { isOk } from '../../src/result/is-ok.js';

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
