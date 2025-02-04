import CardCollection from "./card-collection/card-collection"
import { contentsAll } from "./card-collection/contents-all.type"
import styles from "./style.css"

interface props {
    contents: contentsAll[] | contentsAll
}

export const CardView = ({ contents }: props) => {
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
