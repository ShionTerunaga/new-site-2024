"use client"

import PopupLayoutView from "./popupLayout.view"
import { usePopup } from "@/hooks/popup"

export const PopupLayout = () => {
    const { state } = usePopup()

    return <PopupLayoutView state={state} />
}
