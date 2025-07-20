import SkillContents from "../skill-contents/skill-contents";
import styles from "./style.css";
import { CardType } from "@/components/elements/card/card.type";
import CardButton from "@/components/elements/card-button/card-button";
import { en } from "@/shared/lang/en";

interface Props {
    title?: string;
    contents: CardType[];
}

function CardCollection({ title, contents }: Props) {
    return (
        <div className={styles.container}>
            {title && <h1 className={styles.heading1}>{title}</h1>}
            <div className={styles.clickMessage}>{en.skills.clickMessage}</div>
            <div className={styles.mainBox}>
                {contents.map(({ title, image, description, path }, index) => (
                    <CardButton
                        index={index}
                        title={title}
                        image={image}
                        key={index}
                    >
                        <SkillContents
                            contents={description}
                            url={path}
                            image={image}
                            title={title}
                        />
                    </CardButton>
                ))}
            </div>
        </div>
    );
}

export default CardCollection;
