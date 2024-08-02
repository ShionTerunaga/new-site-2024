import Link from "next/link"
import styles from "./style.css"
import { Card } from "@/components/ui/card"
import { cardType } from "@/components/ui/card/card.type"

interface props {
    title?: string
    contents: cardType[]
}

const CardCollection = (props: props) => {
    return (
        <section className={styles.container}>
            {props.title && <h2 className={styles.heading2}>{props.title}</h2>}
            <div className={styles.mainBox}>
                {props.contents.map((item, index) => (
                    <div key={index} className={styles.item}>
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
