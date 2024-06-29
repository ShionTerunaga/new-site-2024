import useBase from "../base/useBase"

export const useButtonClick = () => {
    const { state, dispatch } = useBase()

    const popupHandleClick = () => {
        if (state) {
            dispatch({ type: "hidden" })
        } else {
            dispatch({ type: "show" })
        }
    }

    return {
        state,
        popupHandleClick
    }
}
