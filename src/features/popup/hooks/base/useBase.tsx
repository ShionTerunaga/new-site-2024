import { useContext } from "react"
import { PopupContext } from "../../store/popup-context"
import { RESULT_ERROR } from "@/utils/others"

const useBase = () => {
    const context = useContext(PopupContext)

    if (context.kind === RESULT_ERROR) {
        throw context.err
    }

    const [state, dispatch] = context.value

    return { state, dispatch }
}

export default useBase
