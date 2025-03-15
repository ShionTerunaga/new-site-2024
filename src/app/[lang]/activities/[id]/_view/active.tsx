import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./style.css";
import { Header } from "@/components/layouts/header";
import { markdownComponent } from "@/features/markdown";
import { getContents } from "@/features/markdown/core";
import { i18n } from "@/utils/lang";
import { routingPath } from "@/utils/routing-paths";

interface Props {
    id: string;
    currentLang: string;
}

export const Active = async ({ id, currentLang }: Props) => {
    const t = i18n(currentLang);
    const markdown = getContents(id, currentLang);

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
    );
};
