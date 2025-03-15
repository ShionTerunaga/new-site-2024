"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./style.css";
import { topAnimation } from "@/shared/static/top-animation";
import { routingPath } from "@/utils/routing-paths";
import { sleep } from "@/utils/sleep";

const TitleSection = () => {
    const router = useRouter();
    const [counter, setCounter] = useState<number>(0);
    const [flag, setFlag] = useState<boolean>(false);
    const animationCounterRef = useRef<number>(0);

    useEffect(() => {
        setFlag(true);

        setTimeout(() => {
            setFlag(false);

            setCounter(counter + 1);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const animationComplete = async () => {
        animationCounterRef.current += 1;

        if (animationCounterRef.current === 1) return;

        if (animationCounterRef.current % 2 === 1) {
            await sleep(3000);

            setFlag(false);

            return;
        }

        if (animationCounterRef.current === 6) {
            router.push(routingPath("en").home);
        }

        setCounter(counter + 1);

        setFlag(true);
    };

    return (
        <section className={styles.titleBox}>
            <AnimatePresence>
                {flag && (
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        onAnimationComplete={animationComplete}
                    >
                        {topAnimation[counter]}
                    </motion.h1>
                )}
            </AnimatePresence>
        </section>
    );
};

export default TitleSection;
