import CardCollection from "../card-collection/card-collection";
import { ContentsAll } from "../card-collection/contents-all.type";
import styles from "./style.css";
import { CheckerProps } from "@/shared/types/props";

interface Props {
    contents: ContentsAll[] | ContentsAll;
}

export function CardView<T extends Props>({
    contents
}: CheckerProps<T, Props>) {
    return (
        <section className={styles.container}>
            <div>
                {Array.isArray(contents) ? (
                    <>
                        {contents.map((item, index) => (
                            <CardCollection key={index} {...item} />
                        ))}
                    </>
                ) : (
                    <CardCollection {...contents} />
                )}
            </div>
        </section>
    );
}
