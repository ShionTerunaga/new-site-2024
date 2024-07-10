"use client"

import { PopupBase } from "@/components/popup"
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
