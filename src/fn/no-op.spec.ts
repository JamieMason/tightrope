import { expect, it } from 'vitest';
import { noOp } from './no-op.js';

it('is a placeholder function that does nothing', () => {
  expect(noOp()).toBeUndefined();
});
