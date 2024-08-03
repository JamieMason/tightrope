import { curry } from '../fn/curry.js';
import type { Gen } from '../fn/types.js';

export type Split = {
  (char: string): (chunks: Gen<string>) => Gen<string>;
  (char: string, chunks: Gen<string>): Gen<string>;
};

/** @tags transformer, generator */
export const split: Split = curry(function* split(
  char: string,
  chunks: Gen<string>,
): Gen<string> {
  const len = char.length;
  let previous = '';

  for (const chunk of chunks) {
    let index: number;
    previous += chunk;

    while (true) {
      index = previous.indexOf(char);
      if (index === -1) break;
      const line = previous.slice(0, index);
      if (line.length > 0) yield line;
      previous = previous.slice(index + len);
    }
  }

  if (previous.length > 0) {
    yield previous;
  }
}, 2);
