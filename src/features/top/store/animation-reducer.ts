import { TextAction, TextState } from "./animation.type"

export function AnimationReducer(
    state: TextState,
    action: TextAction
): TextState {
    switch (action.action) {
        case "show": {
            return {
                state: true,
                ...action
            }
        }
        case "hide": {
            return {
                state: false,
                ...action
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
