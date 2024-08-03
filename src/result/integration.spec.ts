import { expect, test } from 'vitest';
import { flow } from '../fn/flow.js';
import { pipe } from '../fn/pipe.js';
import { tap } from '../fn/tap.js';
import { isArrayOfNumbers } from '../guard/is-array-of-numbers.js';
import { isEvenNumber } from '../guard/is-even-number.js';
import { divide } from '../number/divide.js';
import { multiply } from '../number/multiply.js';
import { subtract } from '../number/subtract.js';
import { all } from './all.js';
import { andThen } from './and-then.js';
import { and } from './and.js';
import { expectErr } from './expect-err.js';
import { expect as rExpect } from './expect.js';
import { filter } from './filter.js';
import { flatten } from './flatten.js';
import { fromGuard } from './from-guard.js';
import { fromTry } from './from-try.js';
import { Err, Ok } from './index.js';
import { isErr } from './is-err.js';
import { isOk } from './is-ok.js';
import { isResult } from './is-result.js';
import { mapErr } from './map-err.js';
import { mapOrElse } from './map-or-else.js';
import { mapOr } from './map-or.js';
import { map } from './map.js';
import { orElse } from './or-else.js';
import { or } from './or.js';
import { sequence } from './sequence.js';
import { unwrapOr } from './unwrap-or.js';
import { unwrap } from './unwrap.js';

const expectEqual = (expected: any) => (actual: any) => {
  expect(actual).toEqual(expected);
};

test('result methods can be piped without type issues', () => {
  const NOT_EVEN_NUMBER = new Error('Value is not an even number');
  const NOT_EVEN_NUMBER_UPPER = new Error('VALUE IS NOT AN EVEN NUMBER');
  const NOT_ERR = new Error('Value should be an Error');
  expect(
    pipe(
      4,
      fromGuard(isEvenNumber, NOT_EVEN_NUMBER),
      tap(r => expect(isResult(r)).toEqual(true)),
      tap(r => expect(isOk(r)).toEqual(true)),
      tap(expectEqual(new Ok(4))),
      and(Ok.create<string, Error>('6')),
      tap(expectEqual(new Ok('6'))),
      map(str => Number(str)),
      tap(expectEqual(new Ok(6))),
      andThen(flow(multiply(2), Ok.create)),
      tap(expectEqual(new Ok(12))),
      map(n => n + 1),
      tap(expectEqual(new Ok(13))),
      unwrap,
      tap(expectEqual(13)),
      fromGuard(isEvenNumber, NOT_EVEN_NUMBER),
      tap(expectEqual(new Err(NOT_EVEN_NUMBER))),
      tap(r => expect(isErr(r)).toEqual(true)),
      expectErr(NOT_ERR.message),
      tap(expectEqual(NOT_EVEN_NUMBER)),
      Err.create<number, Error>,
      tap(expectEqual(new Err(NOT_EVEN_NUMBER))),
      mapErr(error => new Error(error.message.toUpperCase())),
      tap(expectEqual(new Err(NOT_EVEN_NUMBER_UPPER))),
      or(all([2, 4].map(Ok.create<number, Error>))),
      tap(expectEqual(new Ok([2, 4]))),
      filter<number[]>(isArrayOfNumbers, NOT_EVEN_NUMBER.message),
      tap(expectEqual(new Ok([2, 4]))),
      rExpect('Expected Ok<number[]>'),
      tap(expectEqual([2, 4])),
      arr => arr.map(n => fromTry<number, Error>(() => n)),
      tap(expectEqual([new Ok(2), new Ok(4)])),
      sequence,
      tap(expectEqual(new Ok([2, 4]))),
      map(arr => arr.reduce((sum, n) => sum + n, 0)),
      tap(expectEqual(new Ok(6))),
      mapOr(0, subtract(3)),
      tap(expectEqual(3)),
      Ok.create<number, Error>,
      tap(expectEqual(new Ok(3))),
      map(multiply(2)),
      tap(expectEqual(new Ok(6))),
      map(divide(2)),
      tap(expectEqual(new Ok(new Ok(3)))),
      flatten,
      tap(expectEqual(new Ok(3))),
      filter<number>(isEvenNumber, NOT_EVEN_NUMBER.message),
      tap(expectEqual(new Err(new Error(`${NOT_EVEN_NUMBER.message}: 3`)))),
      orElse((/* error */) => new Ok(100)),
      tap(expectEqual(new Ok(100))),
      mapOrElse((/* error */) => 0, multiply(2)),
      tap(expectEqual(200)),
      Ok.create,
      tap(expectEqual(new Ok(200))),
      unwrap,
      tap(expectEqual(200)),
      Ok.create,
      tap(expectEqual(new Ok(200))),
      unwrapOr(new Ok(0)),
    ),
  ).toEqual(200);
});
