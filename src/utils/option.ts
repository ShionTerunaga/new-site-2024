export const OPTION_SOME = "some" as const;
export const OPTION_NONE = "none" as const;

export type Option<T> =
    | { kind: typeof OPTION_SOME; value: T }
    | { kind: typeof OPTION_NONE };

export const createOption = {
    some: <T>(value: T): Option<T> => {
        return {
            kind: OPTION_SOME,
            value: value
        };
    },
    none: (): Option<never> => {
        return {
            kind: OPTION_NONE
        };
    }
};
