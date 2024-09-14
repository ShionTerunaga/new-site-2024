import { DetailedHTMLProps } from "react"
import styles from "./style.css"

const Blockquote = (
    props: DetailedHTMLProps<
        React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
        HTMLQuoteElement
    >
) => {
    return <blockquote className={styles.container} {...props} />
}

export default Blockquote
