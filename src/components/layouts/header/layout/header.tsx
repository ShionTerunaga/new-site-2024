import { Back } from "../../../elements/back";
import LangSelect from "../components/lang-select/lang-select";
import MenuList from "../components/menu-list/menu-list";
import { HeaderProps } from "./header.type";
import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props extends HeaderProps {}

export function Header<T extends Props>(props: CheckerProps<T, Props>) {
    const { isHome, currentLang, path } = props;
    const langProps: Props = props;

    return isHome ? (
        <header className={`${styles.header} ${styles.isHome}`}>
            <LangSelect {...langProps} />
        </header>
    ) : (
        <header className={styles.header}>
            <Back path={path} currentLang={currentLang} />
            <div className={styles.right}>
                <LangSelect {...langProps} />
                <MenuList currentLang={currentLang} />
            </div>
        </header>
    );
}
