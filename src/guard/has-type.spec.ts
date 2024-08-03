import { expect, test } from 'vitest';
import { hasType } from './has-type.js';

test('positive case for string', () => {
  expect(hasType('String', 'hello')).toBe(true);
});

test('positive case for instance of String', () => {
  expect(hasType('String', new String('hello'))).toBe(true);
});

test('negative case for string', () => {
  expect(hasType('String', 123)).toBe(false);
});

test('positive case for array', () => {
  expect(hasType('Array', [1, 2, 3])).toBe(true);
});

test('negative case for array', () => {
  expect(hasType('Array', 'hello')).toBe(false);
});

test('positive case for function', () => {
  expect(hasType('Function', () => null)).toBe(true);
});

test('negative case for function', () => {
  expect(hasType('Function', 'hello')).toBe(false);
});

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

test('positive case for custom class', () => {
  expect(hasType('Person', new Person('Alice', 25))).toBe(true);
});

test('negative case for custom class', () => {
  expect(hasType('Person', { name: 'Bob', age: 30 })).toBe(false);
});
