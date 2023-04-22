import type { Err, Ok, Result } from '../result';

/** Misc Object */
export type AnyRecord = Record<string | number | symbol, unknown>;

/** A function of any kind */
export type AnyFn = (...args: any[]) => any;

/** A guard/isFoo function */
export type AnyGuard = (...args: any[]) => boolean;

/** A guard/isFoo function which accepts one argument */
export type UnaryGuard<T = unknown> = (value: T) => boolean;

/** A guard/isFoo function which accepts two arguments */
export type BinaryGuard = (b: any, a: any) => boolean;

/** Get type of a type guard if it passes */
export type GuardType<T> = T extends (o: any) => o is infer A ? A : never;

/** Get type of members of an array */
export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

/** A function with no arguments or return */
export type VoidFn = () => void;

/** Alias for `ReturnType` */
export type R<F extends AnyFn> = ReturnType<F>;

/** A Generator only yielding values of type `T` */
export type Gen<T> = Generator<T, void, unknown>;

/** An async Generator only yielding values of type `T` */
export type AsyncGen<T> = AsyncGenerator<T, void, unknown>;

/** Get the type which a Generator yields */
export type GenYield<Type> = Type extends Gen<infer X> ? X : never;

/** Get the type which an Async Generator yields */
export type AsyncGenYield<Type> = Type extends AsyncGen<infer X> ? X : never;

/** A Reducer function */
export type Reducer<I, O> = (acc: O, value: I) => O;

/** Get the Ok value type from a Result */
export type ResOk<R> = R extends Ok<infer T>
  ? T
  : R extends Err
  ? never
  : R extends Result<infer X>
  ? X
  : never;

/** Get the Err value type from a Result */
export type ResErr<R> = R extends Err<infer T>
  ? T
  : R extends Ok<any>
  ? never
  : R extends Result<infer X>
  ? X
  : never;

/** A Result containing anything */
export type AnyResult = Result<any, any>;

/** Create a Union of 2 Results */
export type ResultUnion<B extends AnyResult, A extends AnyResult> = Result<
  ResOk<B> | ResOk<A>,
  ResErr<B> | ResErr<A>
>;

/** An Ok containing anything */
export type AnyOk = Ok<any>;

/** An Err containing anything */
export type AnyErr = Err<any>;
