export const RESULT_OK = "ok" as const;
export const RESULT_ERROR = "error" as const;

export type Result<T, E> =
    | { kind: typeof RESULT_OK; value: T }
    | { kind: typeof RESULT_ERROR; err: E };

export const createResult = {
    ok: <T>(value: T): Result<T, never> => {
        return {
            kind: RESULT_OK,
            value: value
        };
    },
    err: <E>(error: E): Result<never, E> => {
        return {
            kind: RESULT_ERROR,
            err: error
        };
    }
};
