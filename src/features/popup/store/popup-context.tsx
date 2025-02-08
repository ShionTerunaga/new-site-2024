"use client"

import { ActionDispatch, ReactNode, createContext, useReducer } from "react"
import { popupReducer } from "./popup-reducer"
import { popAction, popState } from "./popup.type"
import { initialState } from "./popupInitial.static"
import { Result, createResult } from "@/utils/others"

export const PopupContext = createContext<
    Result<[popState, ActionDispatch<[action: popAction]>]>
>(createResult.err("providerの下で定義してください"))

interface Props {
    children: ReactNode
}

export function PopupContextProvider({ children }: Props) {
    const [state, dispatch] = useReducer<popState, [action: popAction]>(
        popupReducer,
        initialState
    )

    const result: Result<[popState, ActionDispatch<[action: popAction]>]> = {
        kind: "ok",
        value: [state, dispatch]
    }

    return <PopupContext value={result}>{children}</PopupContext>
}
