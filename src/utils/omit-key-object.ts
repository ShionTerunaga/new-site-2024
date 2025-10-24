import { isString } from "./is";

export function omitKeyObject<T extends object, S extends keyof T>(
    obj: T,
    keys: S[]
): Omit<T, S> {
    const dict: Record<string, unknown> = {};

    for (const key of Object.keys(obj)) {
        if (keys.includes(key as S)) continue;

        dict[String(key)] = obj[key as keyof T];
    }

    return dict as Omit<T, S>;
}
