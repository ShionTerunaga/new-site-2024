import { Dispatch, ReactNode } from "react"

export type popState = {
    state: boolean
    children?: ReactNode
}

export type popAction = {
    type: "show" | "hidden"
    children?: ReactNode
}

export type popupContextType = {
    state: popState
    dispatch: Dispatch<popAction>
}
