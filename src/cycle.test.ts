import { cycle } from './cycle';
import { range } from './range';

test('cycle with Array argument cycles through its elements ad infinitum', () => {
    const input = [...range(3)].reverse();
    const c = cycle(input);
    const first = c.next();
    c.next();
    c.next();
    const fourth = c.next();
    const fifth = c.next();

    expect(first).toStrictEqual({ value: 2, done: false });
    expect(fourth).toStrictEqual({ value: 2, done: false });
    expect(fifth).toStrictEqual({ value: 1, done: false });
});

test('cycle with iterable argument cycles through its elements ad infinitum', () => {
    const it = range(4, 7);
    const c = cycle(it);
    const first = c.next();
    c.next();
    c.next();
    const fourth = c.next();
    c.next();
    c.next();
    const seventh = c.next();

    expect(first).toStrictEqual({ value: 4, done: false });
    expect(fourth).toStrictEqual({ value: 4, done: false });
    expect(seventh).toStrictEqual({ value: 4, done: false });
});
