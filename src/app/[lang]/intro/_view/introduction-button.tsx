"use client";

import { useMemo } from "react";
import IntroModal from "../_components/intro-modal/intro-modal";
import IntroPopup from "../_components/intro-popup/intro-popup";
import { introData } from "../_static/introduction.data";
import styles from "./style.css";
import { popupAction, PopupContents } from "@/features/popup";
import { CheckerProps } from "@/shared/types/props";
import { Language } from "@/utils/lang";

interface Props {
    currentLang: Language;
}

export function IntroductionButton<T extends Props>({
    currentLang
}: CheckerProps<T, Props>) {
    const introModal = useMemo(() => introData(currentLang), [currentLang]);

    const handlers = useMemo(() => {
        return introModal.map(({ image, headerContents, bodyContents }) => {
            return () => {
                popupAction.open(
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
