import { Dispatch, ReactNode } from "react"

export type OpenState = {
    state: true
    children: ReactNode
}

export type CloseState = {
    state: false
}

export type PopState = CloseState | OpenState

export type OpenAction = {
    type: "show"
    children: ReactNode
}

export type CloseAction = {
    type: "hidden"
}

export type PopAction = CloseAction | OpenAction

export type popupContextType = {
    state: PopState
    dispatch: Dispatch<PopAction>
}
