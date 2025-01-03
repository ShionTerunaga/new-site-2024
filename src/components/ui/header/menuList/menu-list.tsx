"use client"

import { Menu, X } from "@yamada-ui/lucide"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, useState } from "react"
import { staticMenu } from "./menu-list.data"
import styles from "./styles.css"

interface props {
    currentLang: string
}

const MenuList = ({ currentLang }: props) => {
    const path = usePathname()
    const paths = staticMenu(currentLang)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button
                className={`${styles.button} ${isOpen ? styles.closeButton : styles.openButton}`}
                aria-label="open menu"
                onClick={handleClick}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={`${styles.container} ${isOpen ? styles.opacity1 : styles.opacity0}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.menuBox}>
                            <ul className={styles.ul}>
                                {paths.map((item, index) => (
                                    <Fragment key={index}>
                                        {item.path !== path && (
                                            <li className={styles.li}>
                                                <Link
                                                    href={item.path}
                                                    className={styles.link}
                                                >
                                                    <p className={styles.p}>
                                                        {item.pageName}
                                                    </p>
                                                </Link>
                                            </li>
                                        )}
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MenuList
