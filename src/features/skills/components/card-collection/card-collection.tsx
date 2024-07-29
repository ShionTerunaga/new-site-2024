import Link from "next/link"
import { Card } from "@/components/card"
import { cardType } from "@/components/card/card.type"

interface props {
    title: string
    skills: cardType[]
}

const CardCollection = (props: props) => {
    return (
        <section>
            <h2>{props.title}</h2>
            <div>
                {props.skills.map((item, index) => (
                    <div key={index}>
                        <Link href={item.path}>
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
