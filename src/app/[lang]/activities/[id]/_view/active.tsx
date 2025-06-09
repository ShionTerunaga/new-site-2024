import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./style.css";
import { Header } from "@/components/layouts/header";
import { markdownComponent } from "@/features/markdown";
import { getContents } from "@/features/markdown/core";
import { i18n, Language } from "@/utils/lang";
import { routingPath } from "@/utils/routing-paths";

interface Props {
    id: string;
    currentLang: Language;
}

export async function Active({ id, currentLang }: Props) {
    const t = i18n(currentLang);
    const { options, source, overview } = getContents(id, currentLang);

    return (
        <>
            <Header
                title={t.active.title}
                path={routingPath(currentLang).activity}
                currentLang={currentLang}
            />
            <main className={styles.mainBox}>
                <section className={styles.container}>
                    <h1 className={styles.heading}>{overview.title}</h1>
                    <section className={styles.contents}>
                        <MDXRemote
                            source={source}
                            options={options}
                            components={markdownComponent}
                        />
                    </section>
                </section>
            </main>
        </>
    );
}
