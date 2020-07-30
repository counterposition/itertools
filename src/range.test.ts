import { range } from './range';

test('range with no arguments throws an Error', () => {
    expect(() => {
        range().next();
    }).toThrowError('Invalid arguments');
});

test('range with single argument = 0 returns no numbers', () => {
    const r = range(0);
    const value = r.next();
    expect(value).toStrictEqual({ done: true, value: undefined });
});

test('range with single argument < 0 returns a decreasing sequence', () => {
    const r = range(-3);
    const result = [...r];
    expect(result).toStrictEqual([0, -1, -2]);
});

test('range with single argument > 0 returns an increasing sequence', () => {
    const r = range(3);
    const result = [...r];
    expect(result).toStrictEqual([0, 1, 2]);
});

test('range with two arguments (lower = upper) returns no numbers', () => {
    const r = range(3, 3);
    const value = r.next();
    expect(value).toStrictEqual({ done: true, value: undefined });
});

test('range with two arguments (lower < upper) returns an increasing sequence', () => {
    const r = range(3, 6);
    expect([...r]).toStrictEqual([3, 4, 5]);
});

test('range with two arguments (lower > upper) returns a decreasing sequence', () => {
    const r = range(6, 3);
    expect([...r]).toStrictEqual([6, 5, 4]);
});
