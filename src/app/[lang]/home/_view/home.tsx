import Image from "next/image";
import Link from "next/link";
import CardContainer from "../_components/card-container/card-container";
import Icon from "../_components/icon/icon";
import { X_ICON } from "../_static/assets";
import { staticCard } from "../_static/card";
import styles from "./styles.css";
import GITHUB from "@/assets/home/github-mark-white.svg";
import { Card } from "@/components/elements/card";
import { Header } from "@/components/layouts/header";
import { i18n } from "@/utils/lang";

interface Props {
    currentLang: string;
}

export const Home = ({ currentLang }: Props) => {
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
                            <Image src={GITHUB} width={22} height={22} alt="" />
                        </a>
                    </div>
                </section>
                <section className={styles.cardContainer}>
                    {cards.map((item, index) => (
                        <CardContainer index={index} key={index}>
                            <Link href={item.path} className={styles.link}>
                                <Card {...item} />
                            </Link>
                        </CardContainer>
                    ))}
                </section>
            </main>
        </>
    );
};
