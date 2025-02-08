export const OPTION_SOME = "some" as const
export const OPTION_NONE = "none" as const

export const RESULT_OK = "ok" as const
export const RESULT_ERROR = "error" as const

export type Option<T> =
    | { kind: typeof OPTION_SOME; value: T }
    | { kind: typeof OPTION_NONE }

export type Result<T> =
    | { kind: typeof RESULT_OK; value: T }
    | { kind: typeof RESULT_ERROR; err: Error }

export const createOption = {
    some: <T>(value: T): Option<T> => {
        return {
            kind: "some",
            value: value
        }
    },
    none: (): Option<never> => {
        return {
            kind: "none"
        }
    }
}

export const createResult = {
    ok: <T>(value: T): Result<T> => {
        return {
            kind: "ok",
            value: value
        }
    },
    err: (message: string): Result<never> => {
        return {
            kind: "error",
            err: new Error(message)
        }
    }
}
