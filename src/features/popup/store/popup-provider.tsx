"use client"

import { ReactNode } from "react"
import { popupReducer } from "./popup-reducer"
import { PopAction, PopState } from "./popup.type"
import { initialState } from "./popupInitial.static"
import { createReducerContext } from "@/utils/context"

interface Props {
    children: ReactNode
}

export const PopupContext = createReducerContext<PopState, PopAction>({
    errMessage: "Providerの下で定義してください",
    initialState
})

export function PopupProvider({ children }: Props) {
    const { Provider } = PopupContext

    return <Provider reducer={popupReducer}>{children}</Provider>
}
