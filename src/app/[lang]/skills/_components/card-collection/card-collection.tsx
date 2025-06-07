import CardButton from "../card-button/card-button";
import SkillContents from "../skill-contents/skill-contents";
import styles from "./style.css";
import { CardType } from "@/components/elements/card/card.type";
import { en } from "@/shared/lang/en";

interface Props {
    title?: string;
    contents: CardType[];
}

const CardCollection = ({ title, contents }: Props) => {
    return (
        <div className={styles.container}>
            {title && <h1 className={styles.heading1}>{title}</h1>}
            <div className={styles.clickMessage}>{en.skills.clickMessage}</div>
            <div className={styles.mainBox}>
                {contents.map((item, index) => (
                    <CardButton index={index} {...item} key={index}>
                        <SkillContents
                            contents={item.description}
                            url={item.path}
                            {...item}
                        />
                    </CardButton>
                ))}
            </div>
        </div>
    );
};

export default CardCollection;
