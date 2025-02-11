import ContentsBox from "../components/contents-box/contents-box"
import ListBox from "../components/list-box/list-box"
import { getAppeal } from "../static/appeal"
import { getStack } from "../static/stack"
import styles from "./style.css"
import { Header } from "@/components/header"
import { i18n } from "@/utils/lang"

interface Props {
    currentLang: string
}

export const AboutComponent = ({ currentLang }: Props) => {
    const t = i18n(currentLang)
    const stack = getStack(currentLang)
    const appeal = getAppeal(currentLang)

    return (
        <>
            <Header currentLang={currentLang} />
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
