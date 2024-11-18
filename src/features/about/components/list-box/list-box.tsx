import styles from "./style.css"

interface props {
    items: string[]
}

const ListBox = (props: props) => {
    return (
        <section className={styles.section}>
            <ul className={styles.container}>
                {props.items.map((item, index) => (
                    <li key={index} className={styles.list}>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ListBox
