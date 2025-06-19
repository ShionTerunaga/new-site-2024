export function omitKeyObject<T extends object, S extends keyof T>(
    obj: T,
    keys: S[]
): Omit<T, S> {
    const result = { ...obj };

    for (const key of keys) {
        delete result[key];
    }

    return result;
}
