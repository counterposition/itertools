export function* count(start: number = 0, step: number = 1) {
    let i = start;
    while (true) {
        yield i;
        i += step
    };
}
