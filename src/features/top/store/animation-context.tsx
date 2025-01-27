"use client"

import {
    createContext,
    Dispatch,
    ReactNode,
    useContext,
    useReducer
} from "react"
import { AnimationReducer } from "./animation-reducer"
import { TextAction, TextState } from "./animation.type"

export const AnimationContext = createContext<
    [TextState, Dispatch<TextAction>] | undefined
>(undefined)

interface Props {
    children: ReactNode
}

const initialState: TextState = {
    state: false,
    onComplete: () => {}
}

export function AnimationProvider({ children }: Props) {
    const [state, dispatch] = useReducer(AnimationReducer, initialState)

    return (
        <AnimationContext value={[state, dispatch]}>
            {children}
        </AnimationContext>
    )
}

export function useAnimationContext() {
    const context = useContext(AnimationContext)

    if (!context) {
        throw Error("providerがありません")
    }

    const [state, dispatch] = context

    return {
        state,
        dispatch
    }
}
