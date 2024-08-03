import 'vitest';

interface CustomMatchers<R = unknown> {
  toBeErrOf(value: any): R;
  toBeOkOf(value: any): R;
  toPassGuard(fn: (...args: any[]) => boolean): R;
  toProduce(values: any[]): R;
  toProduceAsync(values: any[]): Promise<R>;
}

declare module 'vitest' {
  interface Assertion<T = any> extends CustomMatchers<T> {}
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
