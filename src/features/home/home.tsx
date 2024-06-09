import Image from "next/image"
import styles from "./styls.css"
import ICON from "@/assets/icon.jpg"

export const Home = () => {
    return (
        <main>
            <section className={styles.iconBox}>
                <Image
                    src={ICON}
                    width={100}
                    height={100}
                    alt="My Icon"
                    className={styles.icon}
                />
            </section>
        </main>
    )
}
