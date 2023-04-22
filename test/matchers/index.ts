import type { AnyGuard } from '../../src/fn/types';
import './to-be-err-of';
import './to-be-ok-of';
import './to-pass-guard';
import './to-produce';
import './to-produce-async';

declare module 'vitest' {
  interface CustomMatchers<R = unknown> {
    toBeErrOf(value: any): R;
    toBeOkOf(value: any): R;
    toPassGuard(fn: AnyGuard): R;
    toProduce(values: any[]): R;
    toProduceAsync(values: any[]): Promise<R>;
  }

  namespace Vi {
    type Assertion = CustomMatchers;
    type AsymmetricMatchersContaining = CustomMatchers;
  }
}
