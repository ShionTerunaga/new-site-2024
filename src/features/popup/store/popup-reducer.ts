import { PopAction, PopState } from "./popup.type"

export const popupReducer = (state: PopState, action: PopAction): PopState => {
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
