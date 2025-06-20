"use client";

import { ReactNode } from "react";
import { PopupLayout } from "../layout/popup-layout";
import { popupReducer } from "./popup-reducer";
import { PopAction, PopState } from "./popup.type";
import { initialState } from "./popupInitial.static";
import { CheckerProps } from "@/shared/types/props";
import { createReducerContext } from "@/utils/context/reducer";

interface Props {
    children: ReactNode;
}

export const PopupContext = createReducerContext<PopState, PopAction>({
    errMessage: "Providerの下で定義してください",
    initialState
});

export function PopupProvider<T extends Props>({
    children
}: CheckerProps<T, Props>) {
    const { Provider } = PopupContext;

    return (
        <Provider reducer={popupReducer}>
            <PopupLayout />
            {children}
        </Provider>
    );
}
