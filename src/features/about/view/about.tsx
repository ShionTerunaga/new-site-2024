import ContentsBox from "../components/contents-box/contents-box"
import ListBox from "../components/list-box/list-box"
import { getAppeal } from "../static/appeal"
import { getStack } from "../static/stack"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { i18n } from "@/shared/static/lang"

interface props {
    lang: string
}

export const AboutComponent = (props: props) => {
    const t = i18n(props.lang)
    const stack = getStack(props.lang)
    const appeal = getAppeal(props.lang)

    return (
        <>
            <Header {...props} />
            <main className={styles.container}>
                <h1 className={styles.title}>{t.about.title}</h1>

                <p className={styles.detail}>{t.about.detail}</p>

                <h2 className={styles.subTitle}>{t.about.tech.title}</h2>
                <ListBox items={stack} />

                <h2 className={styles.subTitle}>{t.about.appeal.title}</h2>
                <ListBox items={appeal} />

                <h2 className={styles.subTitle}>{t.about.design.title}</h2>
                <ContentsBox
                    contents={t.about.design.contents}
                    link={t.about.design.githubUrl}
                    linkTitle={t.about.design.github}
                />
            </main>
        </>
    )
}
