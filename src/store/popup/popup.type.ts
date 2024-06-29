import { Dispatch } from "react"

export type popState = {
    state: boolean
}

export type popAction = {
    type: "show" | "hidden"
}

export type popupContextType = {
    state: popState
    dispatch: Dispatch<popAction>
}
