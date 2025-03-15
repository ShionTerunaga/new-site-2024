import { ReactNode } from "react";
import { PopupContext } from "../store/popup-provider";

export const usePopup = () => {
    const { state, dispatch } = PopupContext.context();

    const openPopup = (children: ReactNode) => {
        dispatch({ type: "show", children: children });
    };

    const closePopup = () => {
        dispatch({ type: "hidden" });
    };

    return {
        state,
        openPopup,
        closePopup
    };
};
