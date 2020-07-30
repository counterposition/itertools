export function* cycle(seq: Iterable<any>) {
    if (!Array.isArray(seq)) seq = [...seq];
    while (true) yield* seq;
}
