import { Back } from "../../../elements/back"
import LangSelect from "../components/lang-select/lang-select"
import MenuList from "../components/menu-list/menu-list"
import { HeaderProps } from "./header.type"
import styles from "./style.css"

interface Props extends HeaderProps {}

export const Header = ({ isHome, ...rest }: Props) => {
    return isHome ? (
        <header className={`${styles.header} ${styles.isHome}`}>
            <LangSelect isHome={isHome} {...rest} />
        </header>
    ) : (
        <header className={styles.header}>
            <Back {...rest} />
            <div className={styles.right}>
                <LangSelect isHome={isHome} {...rest} />
                <MenuList {...rest} />
            </div>
        </header>
    )
}
