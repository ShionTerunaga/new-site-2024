import { DetailedHTMLProps, LiHTMLAttributes } from "react"
import styles from "./style.css"

const Li = (
    props: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
) => {
    return <li {...props} className={styles.li} />
}

export default Li
