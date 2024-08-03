import { curry } from '../fn/lib/curry.js';
import { isNone } from './index.js';
import type { Option } from './option.js';

type Or = {
  <Opt extends Option.Any>(b: Opt): (a: Opt) => Opt;
  <Opt extends Option.Any>(b: Opt, a: Opt): Opt;
};

/**
 * Like the `||` operator, but applied to `Option` types.
 *
 * | Scenario         | Pseudocode               | Outcome                   |
 * | :--------------- | :----------------------- | ------------------------- |
 * | `Some OR None`   | `pipe(Some, or(None))`   | `Some`                    |
 * | `None OR Some`   | `pipe(None, or(Some))`   | `Some`                    |
 * | `None1 OR None2` | `pipe(None1, or(None2))` | `None2`                   |
 * | `Some1 OR Some2` | `pipe(Some1, or(Some2))` | `Some1` (first Some wins) |
 *
 * @tags option, transform, transform-option, recover, errors, left-biased
 */
export const or: Or = curry(
  <Opt extends Option.Any>(b: Opt, a: Opt): Opt => (isNone(a) ? b : a),
  2,
);
