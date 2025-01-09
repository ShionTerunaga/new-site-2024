"use client"

import { AnimatePresence } from "framer-motion"
import { PopupBase } from "@/components/ui/popup"
import { usePopup } from "@/hooks/popup"

export const PopupLayout = () => {
    const { state } = usePopup()

    return (
        <AnimatePresence>
            {state.state && <PopupBase>{state.children}</PopupBase>}
        </AnimatePresence>
    )
}
