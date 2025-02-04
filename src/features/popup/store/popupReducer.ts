import { popAction, popState } from "./popup.type"

export const popupReducer = (state: popState, action: popAction): popState => {
    switch (action.type) {
        case "hidden":
            return {
                state: false
            }
        case "show":
            return {
                state: true,
                children: action.children
            }
        default:
            return {
                ...state
            }
    }
}
