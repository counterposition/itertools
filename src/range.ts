export function* range(...args: number[]) {
    let lower = 0;
    let upper: number;

    switch (args.length) {
        case 1:
            [upper] = args;
            break;
        case 2:
            [lower, upper] = args;
            break;
        default:
            throw new Error('Invalid arguments');
    }

    if (lower < upper) {
        for (let i = lower; i < upper; i++) yield i;
    } else {
        for (let i = lower; i > upper; i--) yield i;
    }
}
