import { expect, it } from 'vitest';
import type { maybe } from './Maybe.gen';
import { nothing, just } from './Maybe.gen';
import { pipe } from '../fn/pipe';
import { match } from './match';

it('returns the first case which is true', () => {
  (
    [
      [just.create('Hi'), 'Hi!'],
      [nothing, 'Value is missing'],
    ] as [maybe<string>, string][]
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
      null as unknown as maybe<null>,
      match({
        Just: (value) => `${value}!`,
        Nothing: () => 'Value is missing',
      }),
    );
  }).toThrow();
});
