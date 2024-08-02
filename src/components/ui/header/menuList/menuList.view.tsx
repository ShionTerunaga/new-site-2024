import { Menu, X } from "@yamada-ui/lucide"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import { staticMenu } from "./menuList.data"
import styles from "./styles.css"

interface props {
    /** メニューを開くかどうか */
    isOpen: boolean
    /** メニューを開くかどうかの */
    setIsOpen: Dispatch<SetStateAction<boolean>>
    /** メニューのアイコンをクリックした時の関数 */
    handleClick: () => void
}

const MenuListView = (props: props) => {
    return (
        <>
            <button
                className={`${styles.button} ${props.isOpen ? styles.closeButton : styles.openButton}`}
                aria-label="open menu"
                onClick={props.handleClick}
            >
                {props.isOpen ? <X /> : <Menu />}
            </button>

            <AnimatePresence>
                {props.isOpen && (
                    <motion.div
                        className={`${styles.container} ${props.isOpen ? styles.opacity1 : styles.opacity0}`}
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                    >
                        <motion.div className={styles.menuBox}>
                            <ul className={styles.ul}>
                                <div>
                                    {staticMenu.map((item, index) => (
                                        <li key={index} className={styles.li}>
                                            <Link
                                                href={item.path}
                                                className={styles.link}
                                            >
                                                <p className={styles.p}>
                                                    {item.pageName}
                                                </p>
                                            </Link>
                                        </li>
                                    ))}
                                </div>
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default MenuListView
