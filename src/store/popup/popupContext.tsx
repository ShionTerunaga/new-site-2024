"use client"

import { ReactNode, createContext, useReducer } from "react"
import { popupContextType } from "./popup.type"
import { initialState } from "./popupInitial.data"
import { popupReducer } from "./popupReducer"

export const PopupContext = createContext<popupContextType>({
    state: initialState,
    dispatch: () => {}
})

interface props {
    children: ReactNode
}

const PopupContextProvider = (props: props) => {
    const [state, dispatch] = useReducer(popupReducer, initialState)

    return (
        <PopupContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PopupContext.Provider>
    )
}

export default PopupContextProvider
