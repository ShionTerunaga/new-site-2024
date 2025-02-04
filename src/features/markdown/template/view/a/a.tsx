import React, { DetailedHTMLProps } from "react"
import LinkCustom from "./components/link-custom/link-custom"
import styles from "./style.css"

const A = (
    props: DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
    >
) => {
    if (props.href === props.children)
        return (
            <span className={styles.container}>
                <LinkCustom url={props.href as string} />
            </span>
        )

    return (
        <a href={props.href as string} target="_blank">
            {props.children}
        </a>
    )
}

export default A
