import { expect, it } from 'vitest';
import '../../test/matchers';
import { pipe } from '../fn/pipe';
import type { Gen } from '../fn/types';
import { split } from './split';

it('collects a string yielded by a generator and yields split portions of it', () => {
  function* stringOverTime(): Gen<string> {
    yield 'Th';
    yield 'e qu';
    yield 'i';
    yield 'ck brown fox jumps';
    yield ' over ';
    yield 'the';
    yield ' ';
    yield 'la';
    yield 'zy dog';
  }

  expect(pipe(stringOverTime(), split(' '))).toProduce([
    'The',
    'quick',
    'brown',
    'fox',
    'jumps',
    'over',
    'the',
    'lazy',
    'dog',
  ]);
});

it('handles case where string to be split is last', () => {
  function* stringOverTime(): Gen<string> {
    yield 'Word ';
  }
  expect(pipe(stringOverTime(), split(' '))).toProduce(['Word']);
});

it('handles case where string to be split is first', () => {
  function* stringOverTime(): Gen<string> {
    yield ' Word';
  }
  expect(pipe(stringOverTime(), split(' '))).toProduce(['Word']);
});

it('yields entire string if split is not present', () => {
  function* stringOverTime(): Gen<string> {
    yield 'Two Words';
  }
  expect(pipe(stringOverTime(), split('X'))).toProduce(['Two Words']);
});
