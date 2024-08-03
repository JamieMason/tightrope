import { expect, test } from 'vitest';
import { noOp } from './no-op.js';

test('is a placeholder function that does nothing', () => {
  expect(noOp()).toBeUndefined();
});
