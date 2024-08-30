"use client"

import { AnimatePresence } from "framer-motion"
import { PopupBase } from "@/components/ui/popup"
import { popState } from "@/store/popup"

interface props {
    state: popState
    onClose: () => void
}

const PopupLayoutView = (props: props) => {
    return (
        <AnimatePresence>
            {props.state.state && <PopupBase>{props.state.children}</PopupBase>}
        </AnimatePresence>
    )
}

export default PopupLayoutView
