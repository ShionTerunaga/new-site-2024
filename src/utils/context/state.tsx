"use client";

import {
    createContext,
    Dispatch,
    JSX,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";
import { createResult, Result, RESULT_ERROR } from "../result";

interface ContextParas<T> {
    errMessage: string;
    initialState: T;
}

export function createStateContext<T>({
    errMessage,
    initialState
}: ContextParas<T>): [
    ({ children }: { children: ReactNode }) => JSX.Element,
    () => [T, Dispatch<SetStateAction<T>>]
] {
    const Context = createContext<
        Result<[T, Dispatch<SetStateAction<T>>], Error>
    >(createResult.err(new Error(errMessage)));

    const Provider = ({ children }: { children: ReactNode }) => {
        const state = useState<T>(initialState);

        const result: Result<[T, Dispatch<SetStateAction<T>>], Error> =
            createResult.ok(state);

        return <Context value={result}>{children}</Context>;
    };

    const useStateContext = (): [T, Dispatch<SetStateAction<T>>] => {
        const state = useContext(Context);

        if (state.kind === RESULT_ERROR) {
            throw state.err;
        }

        return state.value;
    };

    return [Provider, useStateContext];
}
