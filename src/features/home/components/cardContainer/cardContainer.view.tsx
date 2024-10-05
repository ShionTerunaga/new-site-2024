import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./styles.css"
import { Card, cardType } from "@/components/ui/card"

interface props {
    index: number
    item: cardType
    isOpen: boolean
    lang: string
}

const CardContainerView = (props: props) => {
    return (
        props.isOpen && (
            <motion.div
                style={{ width: 202, height: "auto" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 + props.index }}
            >
                <Link href={props.item.path} className={styles.link}>
                    <Card {...props.item} />
                </Link>
            </motion.div>
        )
    )
}

export default CardContainerView
