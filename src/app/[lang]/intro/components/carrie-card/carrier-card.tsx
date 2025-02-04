import { carrier } from "./carrier.data"
import styles from "./style.css"

interface props {
    lang: string
}

const CarrierCard = ({ lang }: props) => {
    const carrierList = carrier(lang)

    return (
        <section className={styles.intro}>
            {carrierList.map((item, index) => (
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
