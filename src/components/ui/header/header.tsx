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

            <h1 className={styles.heading1}>{props.title}</h1>

            <div className={styles.menuBox}>
                <MenuList />
            </div>
        </header>
    )
}
