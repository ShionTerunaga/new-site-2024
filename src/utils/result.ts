export const RESULT_OK = "ok" as const;
export const RESULT_ERROR = "error" as const;

export type Result<T> =
    | { kind: typeof RESULT_OK; value: T }
    | { kind: typeof RESULT_ERROR; err: Error };

export const createResult = {
    ok: <T>(value: T): Result<T> => {
        return {
            kind: "ok",
            value: value
        };
    },
    err: (message: string): Result<never> => {
        return {
            kind: "error",
            err: new Error(message)
        };
    }
};
