import { carrier } from "./carrier.data"
import styles from "./style.css"

const CarrierCard = () => {
    return (
        <section className={styles.intro}>
            {carrier.map((item, index) => (
                <div key={index} className={styles.box}>
                    <h2 className={styles.titleBox}>{item.when}</h2>
                    <div className={styles.introductionContents}>
                        {item.contents}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CarrierCard
