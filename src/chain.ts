export function* chain(...sequences: Iterable<any>[]) {
    for (const s of sequences) yield* s;
}
