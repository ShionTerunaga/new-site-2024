import { Back } from "../back"
import MenuList from "./menuList/menuList.logic"
import styles from "./style.css"
import type { headerProps } from "./header.type"
import LangSelect from "./langSelect/langSelect.view"

interface props extends headerProps {}

export const Header = (props: props) => {
    const {isHome, ...rest} = props

    return isHome ? (
        <header className={`${styles.header} ${styles.isHome}`}>
            <LangSelect {...props} />
        </header>
    ) : (
        <header className={styles.header}>
            <Back {...rest} />
            <div className={styles.right}>
                <LangSelect {...props} />
                <MenuList {...rest} />
            </div>
        </header>
    )
}
