/* Generate all the function overload types for pipe() */

import { pipe } from '../src/fn/pipe.js';
import { map } from '../src/gen/map.js';
import { range } from '../src/gen/range.js';
import { reduce } from '../src/gen/reduce.js';

const typings = pipe(
  range(1, 80),
  map((len) =>
    pipe(
      range(0, len - 1),
      reduce(
        (acc, i) => {
          acc.generics.push(`A${i + 1}`);
          acc.fns.push(`fn${i}: (a${i}: A${i}) => A${i + 1}`);
          return acc;
        },
        { generics: ['A0'] as string[], fns: [] as string[] },
      ),
      map((all) => {
        const fns = all.fns.join(', ');
        const generics = all.generics.join(', ');
        return `export function pipe<${generics}>(value: A0, ${fns}): A${len};`;
      }),
    ),
  ),
  map(Array.from),
  map(([typing]) => typing),
);

for (const typing of typings) {
  console.log(typing);
}
