import { MDXRemote } from "next-mdx-remote/rsc"
import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { getContents } from "@/services/lib"
import { markdownComponent } from "@/services/markdown"
import { en } from "@/shared/lang/en"
import { routingPath } from "@/shared/static/routingPaths"

interface props {
    id: string
    lang: string
}

export const Active = async (props: props) => {
    //const t = i18n(props.lang)
    const markdown = getContents(props.id, props.lang)

    return (
        <>
            <Header
                title={en.active.title}
                path={routingPath(props.lang).activity}
                {...props}
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
