"use client"

import { ActionDispatch, ReactNode, createContext, useReducer } from "react"
import { popupReducer } from "./popup-reducer"
import { PopAction, PopState } from "./popup.type"
import { initialState } from "./popupInitial.static"
import { Result, createResult } from "@/utils/others"

export const PopupContext = createContext<
    Result<[PopState, ActionDispatch<[action: PopAction]>]>
>(createResult.err("providerの下で定義してください"))

interface Props {
    children: ReactNode
}

export function PopupContextProvider({ children }: Props) {
    const [state, dispatch] = useReducer<PopState, [action: PopAction]>(
        popupReducer,
        initialState
    )

    const result: Result<[PopState, ActionDispatch<[action: PopAction]>]> = {
        kind: "ok",
        value: [state, dispatch]
    }

    return <PopupContext value={result}>{children}</PopupContext>
}
