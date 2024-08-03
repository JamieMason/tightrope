import 'vitest';
import type { AnyGuard } from '../../src/fn/types.js';

interface CustomMatchers<R = unknown> {
  toBeErrOf(value: any): R;
  toBeOkOf(value: any): R;
  toPassGuard(fn: AnyGuard): R;
  toProduce(values: any[]): R;
  toProduceAsync(values: any[]): Promise<R>;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
