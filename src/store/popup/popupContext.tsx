"use client"

import { ReactNode, Reducer, createContext, useReducer } from "react"
import { popAction, popState, popupContextType } from "./popup.type"
import { initialState } from "./popupInitial.data"
import { popupReducer } from "./popupReducer"

export const PopupContext = createContext<popupContextType>({
    state: initialState,
    dispatch: () => {}
})

interface props {
    children: ReactNode
}

export const PopupContextProvider = (props: props) => {
    const [state, dispatch] = useReducer<Reducer<popState, popAction>>(
        popupReducer,
        initialState
    )

    return (
        <PopupContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PopupContext.Provider>
    )
}
