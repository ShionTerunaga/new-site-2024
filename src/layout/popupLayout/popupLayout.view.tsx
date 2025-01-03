"use client"

import { AnimatePresence } from "framer-motion"
import { PopupBase } from "@/components/ui/popup"
import { popState } from "@/store/popup"

interface props {
    state: popState
}

const PopupLayoutView = ({ state }: props) => {
    return (
        <AnimatePresence>
            {state.state && <PopupBase>{state.children}</PopupBase>}
        </AnimatePresence>
    )
}

export default PopupLayoutView
