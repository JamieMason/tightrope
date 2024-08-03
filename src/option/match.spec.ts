import { expect, it } from 'vitest';
import { pipe } from '../fn/pipe.js';
import type { Option } from './index.js';
import { Some, none } from './index.js';
import { match } from './match.js';

it.each([
  [Some.create('Hi'), 'Hi!'],
  [none, 'Value is missing'],
])('returns the first case which is true', (option, expected) => {
  expect(
    pipe(
      option,
      match({
        Some: value => `${value}!`,
        None: () => 'Value is missing',
      }),
    ),
  ).toEqual(expected);
});

it('throws when no case is matched', () => {
  expect(() => {
    pipe(
      null as unknown as Option<null>,
      match({
        Some: value => `${value}!`,
        None: () => 'Value is missing',
      }),
    );
  }).toThrow();
});
