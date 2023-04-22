import { expect } from 'vitest';

expect.extend({
  toProduce(actual: any[], expected: any[]) {
    const result = Array.from(actual as any);
    return {
      actual,
      message: () =>
        this.utils.matcherHint(
          'toProduce',
          this.utils.printReceived(result),
          this.utils.printExpected(expected),
          {
            comment: 'Array.from(generator())',
            isNot: this.isNot,
            promise: this.promise,
          },
        ),
      pass: this.equals(result, expected),
    };
  },
});
