import { AnimatePresence, motion } from "framer-motion"
import styles from "./style.css"
import { topAnimation } from "@/shared/static/topAnimation"

interface props {
    counter: number
    flag: boolean
}

const TitleSectionView = (props: props) => {
    return (
        <section className={styles.titleBox}>
            <AnimatePresence>
                {props.flag && (
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        {topAnimation[props.counter]}
                    </motion.h1>
                )}
            </AnimatePresence>
        </section>
    )
}

export default TitleSectionView
