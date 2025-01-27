import { useAnimationContext } from "../store/animation-context"
import { sleep } from "@/utils/sleep"

export function useAnimation() {
    const { state, dispatch } = useAnimationContext()

    const showText = async (contents: string, onComplete: () => void) => {
        dispatch({
            action: "show",
            contents: contents
        })

        await sleep(3000)

        console.log("1min letter")
        dispatch({
            action: "hide",
            onComplete: () => onComplete()
        })
    }

    return { state, showText }
}
