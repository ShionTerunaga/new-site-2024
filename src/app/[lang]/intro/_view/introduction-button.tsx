"use client";

import { useMemo } from "react";
import { introData } from "../_static/introduction.data";
import { Language } from "@/utils/lang";
import { CheckerProps } from "@/shared/types/props";
import { popupAction, PopupContents, usePopup } from "@/features/popup";
import IntroPopup from "../_components/intro-popup/intro-popup";
import styles from "./style.css";
import IntroModal from "../_components/intro-modal/intro-modal";

interface Props {
    currentLang: Language;
}

export function IntroductionButton<T extends Props>({
    currentLang
}: CheckerProps<T, Props>) {
    const introModal = useMemo(() => introData(currentLang), [currentLang]);
    const { open } = popupAction;

    const handlers = useMemo(() => {
        return introModal.map(({ image, headerContents, bodyContents }) => {
            return () => {
                open(
                    <PopupContents>
                        <IntroPopup
                            answer={headerContents}
                            description={bodyContents}
                            image={image}
                        />
                    </PopupContents>
                );
            };
        });
    }, [introModal]);

    return (
        <div className={styles.box}>
            {introModal.map(({ title }, index) => (
                <IntroModal
                    key={title}
                    title={title}
                    handlers={handlers[index]}
                />
            ))}
        </div>
    );
}
