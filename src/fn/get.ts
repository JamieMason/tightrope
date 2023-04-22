import { isFunction } from '../guard/is-function';
import { isPrimitive } from '../guard/is-primitive';
import { isReadable } from '../guard/is-readable';
import type { Result } from '../result';
import { Err, Ok } from '../result';
import { isErr } from '../result/is-err';
import { isOk } from '../result/is-ok';

/**
 * Return an `Ok` containing a deeply nested value from an object, or an `Err`.
 *
 * A curried function that takes two arguments: a string `path` and an `origin` object. It returns an `Ok` containing
 * the value at the specified path in the object, or an `Err` if the path does not exist.
 *
 * ## Example
 *
 * In this example, we first define an object `obj` that has a nested property `foo.bar` with a value of `42`. We then
 * use the `get` function to retrieve the value at this path in the object by passing the path and object as arguments.
 * Note that we also specify the type of the expected value (`number` in this case) as a type argument to the `get`
 * function.
 *
 * ```ts
 * import { get } from 'tightrope/fn/get';
 *
 * // Define an object to query
 * const obj = {
 *   foo: {
 *     bar: 42,
 *   },
 * };
 *
 * // Use get to retrieve a value from the object
 * const result = get<number>('foo.bar', obj); // returns Ok(42)
 * ```
 *
 * The `get` function works by splitting the `path` argument on the `.` character, then using the resulting array of
 * property names to recursively access nested properties in the `origin` object. If any of the intermediate properties
 * do not exist or are not objects, the function returns `Err`.
 *
 * The `get` function is implemented using the `curry` function, which allows us to partially apply the `path` argument
 * and reuse the function with different `origin` objects.
 *
 * @tags read, objects, arrays, result
 */
// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>
>(
  obj: T,
  prop1: P1
): Result<NonNullable<T>[P1], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>
>(
  obj: T,
  prop1: P1,
  prop2: P2
): Result<NonNullable<NonNullable<T>[P1]>[P2], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>
>(
  obj: T,
  prop1: P1,
  prop2: P2,
  prop3: P3
): Result<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>,
  P4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>
>(
  obj: T,
  prop1: P1,
  prop2: P2,
  prop3: P3,
  prop4: P4
): Result<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>,
  P4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>,
  P5 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>
>(
  obj: T,
  prop1: P1,
  prop2: P2,
  prop3: P3,
  prop4: P4,
  prop5: P5
): Result<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>,
  P4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>,
  P5 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>,
  P6 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>
>(
  obj: T,
  prop1: P1,
  prop2: P2,
  prop3: P3,
  prop4: P4,
  prop5: P5,
  prop6: P6
): Result<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>,
  P4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>,
  P5 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>,
  P6 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>,
  P7 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>
>(
  obj: T,
  prop1: P1,
  prop2: P2,
  prop3: P3,
  prop4: P4,
  prop5: P5,
  prop6: P6,
  prop7: P7
): Result<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>[P7], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>,
  P4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>,
  P5 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>,
  P6 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>,
  P7 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>,
  P8 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>[P7]>
>(
  obj: T,
  prop1: P1,
  prop2: P2,
  prop3: P3,
  prop4: P4,
  prop5: P5,
  prop6: P6,
  prop7: P7,
  prop8: P8
): Result<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>[P7]>[P8], Error>;

// prettier-ignore
export function get<
  T,
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>,
  P4 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>,
  P5 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>,
  P6 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>,
  P7 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>,
  P8 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>[P7]>,
  P9 extends keyof NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>[P7]>[P8]>
>(
  obj: T,
  prop1: P1,
  prop2: P2,
  prop3: P3,
  prop4: P4,
  prop5: P5,
  prop6: P6,
  prop7: P7,
  prop8: P8,
  prop9: P9
): Result<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]>[P5]>[P6]>[P7]>[P8]>[P9], Error>;

export function get<T>(obj: T, ...props: any[]): Result<unknown, Error>;

export function get(origin: any, ...props: any[]): Result<unknown, Error> {
  return isReadable(origin)
    ? props.reduce(getChild, origin)
    : ERR_UNREADABLE_ORIGIN(props, origin);
}

/** Used internally by get to retrieve a single child property from a parent object. */
function getChild(parent: unknown, prop: string): unknown | Err<Error> {
  // quit if any ancestor was already not found
  if (isErr(parent)) return parent;
  // ensure we have a plain value and not an Ok
  const value = isOk(parent) ? parent.value : parent;
  // quit if we can't read properties of value (eg value.likeThis)
  if (!isReadable(value)) return ERR_UNREADABLE_CHILD(prop, value);
  // quit if value is object/array/function etc but the child is not found
  if (!isPrimitive(value) && prop in value === false)
    return ERR_NOT_FOUND(prop, value);
  // quit if eg true.toFixed, 12.toUpperCase
  if (isPrimitive(value) && (value as any)[prop] === undefined)
    return ERR_NOT_FOUND(prop, value);
  // the value is present, return it
  const child = (value as any)[prop];
  return new Ok(isFunction(child) ? child.bind(value) : child);
}

function ERR_UNREADABLE_CHILD(child: string, value: unknown) {
  return Err.fromMessage(
    `Cannot read "${child}" from unreadable value: ${value}`,
  );
}

function ERR_NOT_FOUND(child: string, value: any) {
  return Err.fromMessage(`Property "${child}" not found on value: ${value}`);
}

function ERR_UNREADABLE_ORIGIN(props: any[], origin: any) {
  return Err.fromMessage(
    `Cannot read "${props.join('.')}" from unreadable value: ${origin}`,
  );
}
