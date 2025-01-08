import { MDXRemote } from "next-mdx-remote/rsc"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { getContents } from "@/services/lib"
import { markdownComponent } from "@/services/markdown"
import { i18n } from "@/shared/static/lang"
import { routingPath } from "@/shared/static/routingPaths"

interface props {
    id: string
    currentLang: string
}

export const Active = async ({ id, currentLang }: props) => {
    const t = i18n(currentLang)
    const markdown = getContents(id, currentLang)

    return (
        <>
            <Header
                title={t.active.title}
                path={routingPath(currentLang).activity}
                currentLang={currentLang}
            />
            <main className={styles.mainBox}>
                <section className={styles.container}>
                    <h1 className={styles.heading}>
                        {markdown.overview.title}
                    </h1>
                    <section className={styles.contents}>
                        <MDXRemote
                            source={markdown.source}
                            options={markdown.options}
                            components={markdownComponent}
                        />
                    </section>
                </section>
            </main>
        </>
    )
}
