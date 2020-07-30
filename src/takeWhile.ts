export function* takeWhile<T>(predicate: (t: T) => boolean, seq: Iterable<T>) {
    for (const value of seq) {
        if (predicate(value)) yield value;
        else break;
    }
}
