import { carrier } from "./carrier.data";
import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";
import { Language } from "@/utils/lang";

interface Props {
    lang: Language;
}

function CarrierCard<T extends Props>({ lang }: CheckerProps<T, Props>) {
    const carrierList = carrier(lang);

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
    );
}

export default CarrierCard;
