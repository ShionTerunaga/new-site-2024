import SkillContents from "../../skill-contents/skill-contents"
import CardButton from "../card-button/card-button"
import styles from "./style.css"
import { cardType } from "@/components/card/card.type"
import { en } from "@/shared/lang/en"

interface props {
    title?: string
    contents: cardType[]
}

const CardCollection = ({ title, contents }: props) => {
    return (
        <div className={styles.container}>
            {title && <h1 className={styles.heading1}>{title}</h1>}
            <div className={styles.clickMessage}>{en.skills.clickMessage}</div>
            <div className={styles.mainBox}>
                {contents.map((item, index) => (
                    <CardButton {...item} key={index}>
                        <SkillContents
                            contents={item.description}
                            url={item.path}
                            {...item}
                        />
                    </CardButton>
                ))}
            </div>
        </div>
    )
}

export default CardCollection
