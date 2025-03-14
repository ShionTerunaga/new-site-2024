import Image from "next/image"
import { MY_FACE } from "../../_static/assets"
import styles from "./style.css"

const Icon = () => {
    return (
        <picture>
            <Image
                src={MY_FACE}
                width={100}
                height={100}
                alt="My Icon"
                className={styles.icon}
            />
        </picture>
    )
}

export default Icon
