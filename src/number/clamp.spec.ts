import { expect, it } from 'vitest';
import { clamp } from './clamp.js';

it('increments values below the floor', () => {
  expect(clamp(10, 20, 0)).toEqual(10);
});

it('decrements values above the ceiling', () => {
  expect(clamp(10, 20, 30)).toEqual(20);
});

it('does not modify values within range', () => {
  expect(clamp(10, 20, 15)).toEqual(15);
  expect(clamp(-20, -10, -15)).toEqual(-15);
  expect(clamp(-20.5, -10.5, -15.5)).toEqual(-15.5);
  expect(clamp(10, 20, 10)).toEqual(10);
  expect(clamp(10, 20, 20)).toEqual(20);
});

it('handles negative numbers', () => {
  expect(clamp(-20, -10, -30)).toEqual(-20);
  expect(clamp(-20, -10, -5)).toEqual(-10);
  expect(clamp(-20, -10, -10)).toEqual(-10);
});

it('handles floating point numbers', () => {
  expect(clamp(10.5, 20.5, 15.5)).toEqual(15.5);
  expect(clamp(-20.5, -10.5, -5.5)).toEqual(-10.5);
  expect(clamp(-20.5, -10.5, -10.5)).toEqual(-10.5);
});
