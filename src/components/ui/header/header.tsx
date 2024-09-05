import { Back } from "../back"
import MenuList from "./menuList/menuList.logic"
import styles from "./style.css"

interface props {
    /**
     * ページのタイトル
     */
    title: string
}

export const Header = (props: props) => {
    return (
        <header className={styles.header}>
            <Back />

            <div className={styles.menuBox}>
                <MenuList />
            </div>
        </header>
    )
}
