import styles from "./style.css"
import { Header } from "@/components/ui/header"
import { getContents } from "@/services/lib"
import { markdownComponent } from "@/services/markdown"
import { en } from "@/shared/lang/en"
import { MDXRemote } from "next-mdx-remote/rsc"

interface props {
    id: string
}

export const Active = async (props: props) => {
    const markdown = getContents(props.id)

    return (
        <main>
            <Header title={en.active.title} path="/activities" />

            <section className={styles.container}>
                <h1 className={styles.heading}>{markdown.overview.title}</h1>
                <section className={styles.contents}>
                    <MDXRemote
                        source={markdown.source}
                        options={markdown.options}
                        components={markdownComponent}
                    />
                </section>
            </section>
        </main>
    )
}
