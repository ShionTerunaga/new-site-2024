import { Menu, X } from "@yamada-ui/lucide"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import { staticMenu } from "./menu.data"
import styles from "./styles.css"

interface props {
    /** メニューを開くかどうか */
    isOpen: boolean
    /** メニューを開くかどうかの */
    setIsOpen: Dispatch<SetStateAction<boolean>>
    /** メニューのアイコンをクリックした時の関数 */
    handleClick: () => void
}

const MenuView = (props: props) => {
    return (
        <div>
            <button
                className={styles.button}
                aria-label="open menu"
                onClick={props.handleClick}
            >
                {props.isOpen ? <Menu /> : <X />}
            </button>
            <AnimatePresence>
                {props.isOpen && (
                    <div>
                        <motion.ul
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ delay: 0.6 }}
                        >
                            {staticMenu.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.path}>
                                        {item.pageName}
                                    </Link>
                                </li>
                            ))}
                        </motion.ul>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MenuView
