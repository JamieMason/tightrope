import type { Result } from './result.js';
import { Err, Ok } from './result.js';

/**
 * Create an `Ok` or `Err` from `try...catch`.
 *
 * The purpose of `fromTry` is to safely execute a given function and return either an `Ok` instance with the result or
 * an `Err` instance with the caught error.
 *
 * The function is executed inside a try-catch block and if it runs without errors, `fromTry` returns an `Ok` instance
 * with the result. Otherwise, `fromTry` returns an `Err` instance with the caught error.
 *
 * @tags result, wrap, invoke
 */
export function fromTry<E, Fn extends () => any>(
  fn: Fn,
): Result<ReturnType<Fn>, E> {
  try {
    return new Ok(fn());
  } catch (err: unknown) {
    return new Err(err as E);
  }
}
