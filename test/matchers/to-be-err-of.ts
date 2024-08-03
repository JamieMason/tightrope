import { expect } from 'vitest';
import { isErr } from '../../src/result/is-err.js';
import { Err } from '../../src/result/result.js';

expect.extend({
  toBeErrOf(actual: any, expected: any) {
    return {
      actual,
      message: () =>
        this.utils.matcherHint(
          'toBeErrOf',
          this.utils.printReceived(actual),
          this.utils.printExpected(new Err(expected)),
          {
            comment: 'Err',
            isNot: this.isNot,
            promise: this.promise,
          },
        ),
      pass: isErr(actual) && this.equals(actual.value, expected),
    };
  },
});
