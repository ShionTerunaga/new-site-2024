import CardCollection from "../components/card-collection/card-collection"
import { contentsAll } from "../types/contents-all.type"
import styles from "./style.css"
import { Header } from "@/components/ui/header"

interface props {
    pageTitle: string
    contents: contentsAll[] | contentsAll
}

export const CardView = (props: props) => {
    return (
        <main>
            <Header title={props.pageTitle} />
            <div className={styles.container}>
                {Array.isArray(props.contents) ? (
                    <>
                        {props.contents.map((item, index) => (
                            <CardCollection key={index} {...item} isBlank />
                        ))}
                    </>
                ) : (
                    <CardCollection {...props.contents} />
                )}
            </div>
        </main>
    )
}
