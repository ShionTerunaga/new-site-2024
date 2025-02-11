import CardCollection from "./card-collection/card-collection"
import { ContentsAll } from "./card-collection/contents-all.type"
import styles from "./style.css"

interface Props {
    contents: ContentsAll[] | ContentsAll
}

export const CardView = ({ contents }: Props) => {
    return (
        <section className={styles.container}>
            <div>
                {Array.isArray(contents) ? (
                    <>
                        {contents.map((item, index) => (
                            <CardCollection key={index} {...item} />
                        ))}
                    </>
                ) : (
                    <CardCollection {...contents} />
                )}
            </div>
        </section>
    )
}
