"use client"

import { ActionDispatch, ReactNode, createContext, useReducer } from "react"
import { popAction, popState } from "./popup.type"
import { initialState } from "./popupInitial.static"
import { popupReducer } from "./popupReducer"
import { Result } from "@/shared/types/global-types"

export const PopupContext = createContext<
    Result<[popState, ActionDispatch<[action: popAction]>]>
>({
    kind: "error",
    message: "Providerがありません"
})

interface Props {
    children: ReactNode
}

export function PopupContextProvider({ children }: Props) {
    const [state, dispatch] = useReducer(popupReducer, initialState)

    const result: Result<[popState, ActionDispatch<[action: popAction]>]> = {
        kind: "ok",
        value: [state, dispatch]
    }

    return <PopupContext value={result}>{children}</PopupContext>
}
