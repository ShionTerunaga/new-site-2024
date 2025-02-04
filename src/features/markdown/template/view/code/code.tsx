import React, { DetailedHTMLProps } from "react"
import styles from "./style.css"

const Code = (
    props: DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
) => {
    if (props.className) return <code {...props} />

    return <code {...props} className={styles.codeBase} />
}

export default Code
