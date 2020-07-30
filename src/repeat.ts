export function* repeat(value: any, n: number = Infinity) {
    for (let i = 0; i < n; i++) yield value;
}
