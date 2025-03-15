"use client";

import { AnimatePresence } from "motion/react";
import { PopupBase } from "../components/base/popup-base";
import { usePopup } from "@/features/popup";

export const PopupLayout = () => {
    const { state } = usePopup();

    return (
        <AnimatePresence>
            {state.state && <PopupBase>{state.children}</PopupBase>}
        </AnimatePresence>
    );
};
