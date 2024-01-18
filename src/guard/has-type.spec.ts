import { expect, it } from 'vitest';
import { hasType } from './has-type.js';

it('positive case for string', () => {
  expect(hasType('String', 'hello')).toBe(true);
});

it('positive case for instance of String', () => {
  expect(hasType('String', new String('hello'))).toBe(true);
});

it('negative case for string', () => {
  expect(hasType('String', 123)).toBe(false);
});

it('positive case for array', () => {
  expect(hasType('Array', [1, 2, 3])).toBe(true);
});

it('negative case for array', () => {
  expect(hasType('Array', 'hello')).toBe(false);
});

it('positive case for function', () => {
  expect(hasType('Function', () => null)).toBe(true);
});

it('negative case for function', () => {
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

it('positive case for custom class', () => {
  expect(hasType('Person', new Person('Alice', 25))).toBe(true);
});

it('negative case for custom class', () => {
  expect(hasType('Person', { name: 'Bob', age: 30 })).toBe(false);
});
