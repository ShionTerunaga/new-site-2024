import Image from "next/image"
import styles from "./style.css"
import ICON from "@/assets/home/icon.jpg"

const Icon = () => {
    return (
        <picture>
            <Image
                src={ICON}
                width={100}
                height={100}
                alt="My Icon"
                className={styles.icon}
            />
        </picture>
    )
}

export default Icon
