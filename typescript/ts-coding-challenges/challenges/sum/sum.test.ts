import { describe, expect, it } from 'vitest';
import { sum } from './sum';

type SumTestCase = [a: number, b: number, expected: number];

const testCases: SumTestCase[] = [
  [5, 2, 7],
  [15, 2, 17],
  [-5, 2, -3],
  [-5, -2, -7],
  [5, 0, 5],
  [0, 5, 5],
  [0, 0, 0],
];

describe('sum', () => {
  it.each(testCases)('sum(%i, %i) should return %i', (a, b, expected) => {
    expect(sum(a, b)).toBe(expected);
  });
});
