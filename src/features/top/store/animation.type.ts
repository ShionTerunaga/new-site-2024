import { topAnimation } from "@/shared/static/topAnimation"

const contents1 = topAnimation[0]
const contents2 = topAnimation[1]
const contents3 = topAnimation[2]

interface AppearanceState {
    state: true
    contents: string
}

interface DisappearState {
    state: false
    onComplete: () => void
}

export type TextState = AppearanceState | DisappearState

interface AppearanceAction {
    action: "show"
    contents: string
}

interface DisappearAction {
    action: "hide"
    onComplete: () => void
}

export type TextAction = AppearanceAction | DisappearAction
