import { expect, it } from 'vitest';
import type { Option } from './index.js';
import { none, Some } from './index.js';
import { pipe } from '../fn/pipe.js';
import { match } from './match.js';

it('returns the first case which is true', () => {
  (
    [
      [Some.create('Hi'), 'Hi!'],
      [none, 'Value is missing'],
    ] as [Option<string>, string][]
  ).forEach(([option, expected]) => {
    expect(
      pipe(
        option,
        match({
          Some: (value) => `${value}!`,
          None: () => 'Value is missing',
        }),
      ),
    ).toEqual(expected);
  });
});

it('throws when no case is matched', () => {
  expect(() => {
    pipe(
      null as unknown as Option<null>,
      match({
        Some: (value) => `${value}!`,
        None: () => 'Value is missing',
      }),
    );
  }).toThrow();
});
