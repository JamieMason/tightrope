import { expect } from 'vitest';

expect.extend({
  async toProduceAsync(actual: any[], expected: any[]) {
    const result: any[] = [];
    for await (const value of actual) {
      result.push(value);
    }
    return {
      actual,
      message: () =>
        this.utils.matcherHint(
          'toProduceAsync',
          this.utils.printReceived(result),
          this.utils.printExpected(expected),
          {
            comment: 'Array.from(await generator())',
            isNot: this.isNot,
            promise: this.promise,
          },
        ),
      pass: this.equals(result, expected),
    };
  },
});
