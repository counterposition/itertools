import { takeWhile } from './takeWhile';
import { range } from './range';

test('takeWhile with even? predicate and numbers 2 to 9 stops at 2', () => {
    const r = range(2, 10);
    const even = (n: number) => n % 2 === 0;
    const it = takeWhile(even, r);
    const first = it.next();
    const second = it.next();

    expect(first).toStrictEqual({ value: 2, done: false });
    expect(second).toStrictEqual({ value: undefined, done: true });
})
