import { expect, test } from 'vitest';
import { pipe } from '../fn/pipe.js';
import type { Gen } from './index.js';
import { split } from './split.js';

test('collects a string yielded by a generator and yields split portions of it', () => {
  function* stringOverTime(): Gen.Of<string> {
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

test('handles case where string to be split is last', () => {
  function* stringOverTime(): Gen.Of<string> {
    yield 'Word ';
  }
  expect(pipe(stringOverTime(), split(' '))).toProduce(['Word']);
});

test('handles case where string to be split is first', () => {
  function* stringOverTime(): Gen.Of<string> {
    yield ' Word';
  }
  expect(pipe(stringOverTime(), split(' '))).toProduce(['Word']);
});

test('yields entire string if split is not present', () => {
  function* stringOverTime(): Gen.Of<string> {
    yield 'Two Words';
  }
  expect(pipe(stringOverTime(), split('X'))).toProduce(['Two Words']);
});
