"use client"

import PopupLayoutView from "./popupLayout.view"
import { usePopup } from "@/hooks/popup"

export const PopupLayout = () => {
    const { state, closePopup } = usePopup()

    return <PopupLayoutView state={state} onClose={closePopup} />
}
