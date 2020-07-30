import { repeat } from './repeat';

test('repeat with single number argument generates the argument ad infinitum', () => {
    const input = 5;
    const g = repeat(input);
    const first = g.next();
    const second = g.next();

    expect(first).toStrictEqual({ value: 5, done: false });
    expect(second).toStrictEqual({ value: 5, done: false });
});

test('repeat with single object argument generates the argument ad infinitum', () => {
    const input = {
        foo: 'bar',
        daseos: 5
    };

    const g = repeat(input);
    const first = g.next();
    const second = g.next();

    expect(first).toStrictEqual({ value: input, done: false });
    expect(second).toStrictEqual({ value: input, done: false });
});

test('repeat with two arguments generates a value n times before closing', () => {
    const g = repeat('yes', 3);
    const first = g.next();
    const second = g.next();
    const third = g.next();
    const fourth = g.next();

    expect(first).toStrictEqual({ value: 'yes', done: false });
    expect(second).toStrictEqual({ value: 'yes', done: false });
    expect(third).toStrictEqual({ value: 'yes', done: false });
    expect(fourth).toStrictEqual({ value: undefined, done: true });
});
