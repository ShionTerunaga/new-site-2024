import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { i18n } from "@/shared/static/lang"

interface props {
    lang: string
}

export const AboutComponent = (props: props) => {
    const t = i18n(props.lang)

    return (
        <>
            <Header {...props} />
            <main className={styles.container}>
                <h1 className={styles.title}>{t.about.title}</h1>
            </main>
        </>
    )
}
