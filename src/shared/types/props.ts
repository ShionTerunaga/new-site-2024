type Checker<T, TExpect, TError extends string> = T &
    (Exclude<keyof T, keyof TExpect> extends never ? {} : TError);

export type CheckerProps<T, TExpect> = Checker<
    T,
    TExpect,
    "There are extra elements"
>;
