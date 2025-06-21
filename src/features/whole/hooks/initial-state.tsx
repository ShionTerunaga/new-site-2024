"use client";

import { initialStateContext } from "../store/initial-context";

export function useInitialState() {
    const [, useInitialState] = initialStateContext;
    const [isFirst, setIsFirst] = useInitialState();

    return {
        isFirst,
        setIsFirst
    };
}
