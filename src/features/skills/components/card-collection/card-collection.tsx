import Link from "next/link"
import styles from "./style.css"
import { Card } from "@/components/card"
import { cardType } from "@/components/card/card.type"

interface props {
    title: string
    skills: cardType[]
}

const CardCollection = (props: props) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.heading2}>{props.title}</h2>
            <div className={styles.mainBox}>
                {props.skills.map((item, index) => (
                    <div key={index}>
                        <Link
                            href={item.path}
                            className={styles.link}
                            target="__blank"
                        >
                            <Card
                                title={item.title}
                                image={item.image}
                                description={item.description}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CardCollection
