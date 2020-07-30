import { count } from './count';

test('count with no arguments generates the natural numbers (including 0)', () => {
    const g = count();
    const first = g.next();
    const second = g.next();

    expect(first).toStrictEqual({ value: 0, done: false });
    expect(second).toStrictEqual({ value: 1, done: false });
});

test('count with single positive argument generates successors of the argument', () => {
    const g = count(3);
    const first = g.next();
    const second = g.next();

    expect(first).toStrictEqual({ value: 3, done: false });
    expect(second).toStrictEqual({ value: 4, done: false });
});
