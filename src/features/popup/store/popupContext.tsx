"use client"

import { ReactNode, createContext, useReducer } from "react"
import { popupContextType } from "./popup.type"
import { initialState } from "./popupInitial.static"
import { popupReducer } from "./popupReducer"

export const PopupContext = createContext<popupContextType>({
    state: initialState,
    dispatch: () => {}
})

interface props {
    children: ReactNode
}

export const PopupContextProvider = (props: props) => {
    const [state, dispatch] = useReducer(popupReducer, initialState)

    return (
        <PopupContext value={{ state, dispatch }}>
            {props.children}
        </PopupContext>
    )
}
