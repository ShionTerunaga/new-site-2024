import SkillContents from "../../skill-contents/skill-contents"
import CardButton from "../card-button/card-button"
import styles from "./style.css"
import { cardType } from "@/components/ui/card/card.type"
import { en } from "@/shared/lang/en"

interface props {
    title?: string
    isBlank?: boolean
    contents: cardType[]
}

const CardCollection = (props: props) => {
    return (
        <div className={styles.container}>
            {props.title && <h1 className={styles.heading1}>{props.title}</h1>}
            <div className={styles.clickMessage}>{en.skills.clickMessage}</div>
            <div className={styles.mainBox}>
                {props.contents.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <CardButton {...item}>
                            <SkillContents
                                contents={item.description}
                                url={item.path}
                                {...item}
                            />
                        </CardButton>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardCollection
