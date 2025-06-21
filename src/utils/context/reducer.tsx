"use client";

import {
    ActionDispatch,
    createContext,
    JSX,
    ReactNode,
    useContext,
    useReducer
} from "react";
import { createResult, Result, RESULT_ERROR } from "@/utils/result";

interface ContextParams<T> {
    errMessage: string;
    initialState: T;
}

export function createReducerContext<T, S>({
    errMessage,
    initialState
}: ContextParams<T>) {
    const Context = createContext<
        Result<[T, ActionDispatch<[action: S]>], Error>
    >(createResult.err(new Error(errMessage)));

    const Provider = function ({
        children,
        reducer
    }: {
        children: ReactNode;
        reducer: (state: T, action: S) => T;
    }): JSX.Element {
        const [state, action] = useReducer<T, [action: S]>(
            reducer,
            initialState
        );

        const result: Result<[T, ActionDispatch<[action: S]>], Error> =
            createResult.ok([state, action]);

        return <Context value={result}>{children}</Context>;
    };

    const context = function useReducerContext(): {
        state: T;
        dispatch: ActionDispatch<[action: S]>;
    } {
        const context = useContext(Context);

        if (context.kind === RESULT_ERROR) {
            throw context.err;
        }

        const [state, dispatch] = context.value;

        return { state, dispatch };
    };

    return { Provider, context };
}
