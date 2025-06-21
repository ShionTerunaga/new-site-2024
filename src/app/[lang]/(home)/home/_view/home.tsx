import Image from "next/image";
import Link from "next/link";
import CardContainer from "../_components/card-container/card-container";
import Icon from "../_components/icon/icon";
import { X_ICON, GITHUB_ICON } from "../_static/assets";
import { staticCard } from "../_static/card";
import styles from "./styles.css";
import { Card } from "@/components/elements/card";
import { Header } from "@/components/layouts/header";
import { CheckerProps } from "@/shared/types/props";
import { i18n, Language } from "@/utils/lang";

interface Props {
    currentLang: Language;
}

export function Home<T extends Props>({ currentLang }: CheckerProps<T, Props>) {
    const t = i18n(currentLang);
    const cards = staticCard(currentLang);

    return (
        <>
            <Header isHome currentLang={currentLang} />
            <main className={styles.container}>
                <section className={styles.iconBox}>
                    <Icon />
                </section>
                <section className={styles.greetingBox}>
                    <h1 className={styles.name}>{t.home.name}</h1>
                    <div className={styles.descriptionBox}>
                        <p>{t.home.description}</p>
                    </div>
                    <div className={styles.icons}>
                        <a
                            href="https://x.com/TERUSI1201"
                            target="_blank"
                            aria-label="This is X of TERUSI"
                        >
                            <Image src={X_ICON} width={20} height={20} alt="" />
                        </a>
                        <a
                            href="https://github.com/ShionTerunaga"
                            target="_blank"
                            aria-label="This is GitHub of TERUSI"
                        >
                            <Image
                                src={GITHUB_ICON}
                                width={22}
                                height={22}
                                alt=""
                            />
                        </a>
                    </div>
                </section>
                <section className={styles.cardContainer}>
                    {cards.map(({ path, image, title, description }, index) => (
                        <CardContainer index={index} key={index}>
                            <Link href={path} className={styles.link}>
                                <Card
                                    image={image}
                                    title={title}
                                    description={description}
                                />
                            </Link>
                        </CardContainer>
                    ))}
                </section>
            </main>
        </>
    );
}
