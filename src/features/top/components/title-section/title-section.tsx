"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import styles from "./style.css"
import { routingPath } from "@/shared/static/routingPaths"
import { topAnimation } from "@/shared/static/topAnimation"

const TitleSection = () => {
    const router = useRouter()
    const [counter, setCounter] = useState<number>(0)
    const [flag, setFlag] = useState<boolean>(false)

    useEffect(() => {
        if (counter === 0) setFlag(true)

        if (counter < topAnimation.length) {
            setTimeout(() => {
                setFlag(false)

                setCounter(counter + 1)

                setFlag(true)
            }, 3000)
        }

        if (counter === topAnimation.length) {
            setTimeout(() => {
                setFlag(false)

                router.push(routingPath("en").home)
            }, 500)
        }
    }, [counter, router])

    return (
        <section className={styles.titleBox}>
            <AnimatePresence>
                {flag && (
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {topAnimation[counter]}
                    </motion.h1>
                )}
            </AnimatePresence>
        </section>
    )
}

export default TitleSection
