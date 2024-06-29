import { popAction, popState } from "./popup.type"

export const popupReducer = (state: popState, action: popAction) => {
    switch (action.type) {
        case "show":
            return {
                state: true
            }
        case "hidden":
            return {
                state: false
            }
        default:
            return state
    }
}
