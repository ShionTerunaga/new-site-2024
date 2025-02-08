import { useContext } from "react"
import { PopupContext } from "../../store/popup-context"

const useBase = () => {
    const context = useContext(PopupContext)

    if (context.kind === "error") {
        throw context.err
    }

    const [state, dispatch] = context.value

    return { state, dispatch }
}

export default useBase
