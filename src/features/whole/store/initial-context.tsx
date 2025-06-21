"use client";

import { ReactNode } from "react";
import { createStateContext } from "@/utils/context/state";

export const initialStateContext = createStateContext({
    errMessage: "Set initial State in initial-context",
    initialState: true
});

interface Props {
    children: ReactNode;
}

export function InitialStateProvider({ children }: Props) {
    const [Provider] = initialStateContext;

    return <Provider>{children}</Provider>;
}
