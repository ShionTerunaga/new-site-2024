export function pickObject<T extends object, S extends keyof T>(
    obj: T,
    keys: S[]
): Pick<T, S> {
    const result: Record<string, unknown> = {};

    for (const key of keys) {
        result[key as string] = obj[key];
    }

    return result as Pick<T, S>;
}
