import { describe, expect, test } from 'vitest';
import { None, Some, none } from './option.js';

describe('None', () => {
  test('none is an instance of None', () => {
    expect(none).toBeInstanceOf(None);
  });

  test('accessing the value of none is forbidden', () => {
    expect(() => none.value).toThrow('Tried to unwrap None');
  });
});

describe('Some', () => {
  test('Some.create creates a Some instance', () => {
    const value = Some.create('Hello, world!');
    expect(value).toBeInstanceOf(Some);
  });

  test('Some.create creates a Some instance with the correct value', () => {
    const instance = Some.create('Hello, world!');
    expect(instance.value).toBe('Hello, world!');
  });
});
