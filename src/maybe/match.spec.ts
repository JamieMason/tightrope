import { expect, it } from 'vitest';
import type { Maybe } from '.';
import { nothing, Just } from '.';
import { pipe } from '../fn/pipe';
import { match } from './match';

it('returns the first case which is true', () => {
  (
    [
      [Just.create('Hi'), 'Hi!'],
      [nothing, 'Value is missing'],
    ] as [Maybe<string>, string][]
  ).forEach(([maybe, expected]) => {
    expect(
      pipe(
        maybe,
        match({
          Just: (value) => `${value}!`,
          Nothing: () => 'Value is missing',
        }),
      ),
    ).toEqual(expected);
  });
});

it('throws when no case is matched', () => {
  expect(() => {
    pipe(
      null as unknown as Maybe<null>,
      match({
        Just: (value) => `${value}!`,
        Nothing: () => 'Value is missing',
      }),
    );
  }).toThrow();
});
