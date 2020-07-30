import { chain } from './chain';

test('chain with no arguments returns an empty generator', () => {
    const g = chain();
    expect([...g]).toStrictEqual([]);
});

test('chain with single Array argument returns generator of argument', () => {
    const input = [4, 5, 6];
    const g = chain(input);
    const first = g.next()
    const second = g.next()
    const third = g.next();
    const fourth = g.next();

    expect(first).toStrictEqual({ value: 4, done: false });
    expect(second).toStrictEqual({ value: 5, done: false });
    expect(third).toStrictEqual({ value: 6, done: false });
    expect(fourth).toStrictEqual({ value: undefined, done: true });
});

test('chain with two Arrays', () => {
    const first = [4, 5, 6];
    const second = ['four', 'five', 'six'];
    const g = chain(first, second);

    expect([...g]).toStrictEqual([...first, ...second]);
});
