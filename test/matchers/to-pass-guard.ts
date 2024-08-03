import { expect } from 'vitest';

/** Get more useful output than "expected false to be true" */
expect.extend({
  toPassGuard(actual: any[], expected: (...args: any[]) => boolean) {
    const guard = expected;
    const args = actual as any[];
    const pass = guard(...args);
    return {
      actual,
      message: () =>
        this.utils.matcherHint(
          'toPassGuard',
          this.utils.printReceived(args),
          this.utils.printExpected(guard.name),
          {
            comment: `${guard.name}(${args}) === ${pass}`,
            isNot: this.isNot,
            promise: this.promise,
          },
        ),
      pass,
    };
  },
});
