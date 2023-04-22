import { expect, it } from 'vitest';
import { startsWith } from './starts-with';

it('positive case', () => {
  expect(startsWith('start', 'start-example')).toBe(true);
});

it('negative case with mismatched start', () => {
  expect(startsWith('not', 'start-example')).toBe(false);
});

it('negative case with non-string value', () => {
  expect(startsWith('start', 123 as any)).toBe(false);
});
