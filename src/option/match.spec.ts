import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import { match } from './match.js';
import type { Option } from './option.js';
import { Some, none } from './option.js';

test.each([
  [Some.create('Hi'), 'Hi!'],
  [none, 'Value is missing'],
])('returns the first case which is true', (option, expected) => {
  expect(
    pipe(
      option,
      match({
        Some: (value: string) => `${value}!`,
        None: () => 'Value is missing',
      }),
    ),
  ).toEqual(expected);
});

test('throws when no case is matched', () => {
  expect(() => {
    pipe(
      null as unknown as Option<string>,
      match({
        Some: (value: string) => `${value}!`,
        None: () => 'Value is missing',
      }),
    );
  }).toThrow();
});
