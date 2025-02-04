import { useContext } from "react"
import { PopupContext } from "../../store/popupContext"

const useBase = () => {
    const { state, dispatch } = useContext(PopupContext)

    return { state, dispatch }
}

export default useBase
