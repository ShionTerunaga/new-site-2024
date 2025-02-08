import { en } from "../shared/lang/en"
import { ja } from "../shared/lang/ja"

export const lang: string[] = ["en", "ja"]

export const i18n = (lang: string) => {
    switch (lang) {
        case "en":
            return en
        case "ja":
            return ja
        default:
            return en
    }
}
