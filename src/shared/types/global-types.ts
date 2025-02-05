export type Option<T> = { kind: "some"; value: T } | { kind: "None" }

export type Result<T> =
    | { kind: "ok"; value: T }
    | { kind: "error"; message: string }
