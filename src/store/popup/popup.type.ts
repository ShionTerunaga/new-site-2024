import { Dispatch, ReactNode } from "react"

export type openState = {
    state: true
    children: ReactNode
}

export type closeState = {
    state: false
}

export type popState = closeState | openState

export type openAction = {
    type: "show"
    children: ReactNode
}

export type closeAction = {
    type: "hidden"
}

export type popAction = closeAction | openAction

export type popupContextType = {
    state: popState
    dispatch: Dispatch<popAction>
}
