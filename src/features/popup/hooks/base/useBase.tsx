import { useContext } from "react"
import { PopupContext } from "../../store/popupContext"

const useBase = () => {
    const context = useContext(PopupContext)

    if (context.kind === "error") {
        throw new Error(context.message)
    }

    const [state, dispatch] = context.value

    return { state, dispatch }
}

export default useBase
