"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import type { HeaderProps } from "../../layout/header.type";
import styles, { dropLi } from "./styles.css";
import { CheckerProps } from "@/shared/types/props";
import { lang } from "@/utils/lang";

interface Props extends HeaderProps {}

function LangSelect<T extends Props>({ currentLang }: CheckerProps<T, Props>) {
    const [isDrop, setIsDrop] = useState(false);
    const pathArr = usePathname().split("/");
    const params = useParams().id || "";
    const router = useRouter();

    const toggleDrop = () => setIsDrop((prev) => !prev);

    const clickLink = (lang: string) => {
        setIsDrop(false);

        if (pathArr.length <= 2) {
            router.push(`/${lang}`);

            return;
        }

        if (pathArr[1] !== lang)
            router.push(`/${lang}/${pathArr[2]}/${params}`);
    };

    return (
        <div className={styles.selectLang}>
            <button type="button" className={styles.box} onClick={toggleDrop}>
                <span className={styles.label}>lang:</span>
                <span className={styles.lang}>{currentLang}</span>
                <span className={styles.arrow}></span>
            </button>
            <ul
                className={`${styles.dropBox} ${isDrop ? styles.show : styles.hidden}`}
            >
                {lang.map((ln, index) => (
                    <li className={dropLi} key={index}>
                        <button
                            className={styles.langLink}
                            onClick={() => clickLink(ln)}
                        >
                            {ln}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LangSelect;
