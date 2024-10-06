import { Back } from "../back"
import MenuList from "./menuList/menuList.logic"
import styles from "./style.css"
import LangSelect from './langSelect/LangSelect.view'
import type { headerProps } from './header.type'

interface props extends headerProps {}

export const Header = (props: props) => {
    return (
        <header className={styles.header}>
            <Back {...props} />
            <div className={styles.right}>
                <LangSelect {...props} />
                <MenuList {...props} />
            </div>
        </header>
    )
}
