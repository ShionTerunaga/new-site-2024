"use client"

import { PopupBase } from "@/components/ui/popup"
import { popState } from "@/store/popup/popup.type"

interface props {
    state: popState
    onClose: () => void
}

const PopupLayoutView = (props: props) => {
    return (
        <>
            {props.state.state && <PopupBase>{props.state.children}</PopupBase>}
        </>
    )
}

export default PopupLayoutView
