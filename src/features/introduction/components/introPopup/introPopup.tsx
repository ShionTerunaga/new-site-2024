import styles from "./style.css"

interface props {
    answer: string
    description: string
}

const IntroPopup = (props: props) => {
    return (
        <>
            <h2 className={styles.heading2}>{props.answer}</h2>
            <div className={styles.description}>{props.description}</div>
        </>
    )
}

export default IntroPopup
