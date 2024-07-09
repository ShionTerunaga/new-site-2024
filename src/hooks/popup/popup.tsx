import { ReactNode } from "react"
import useBase from "../base/useBase"

export const usePopup = () => {
    const { state, dispatch } = useBase()

    const openPopup = (children: ReactNode) => {
        dispatch({ type: "show", children: children })
    }

    const closePopup = () => {
        dispatch({ type: "hidden" })
    }

    return {
        state,
        openPopup,
        closePopup
    }
}
