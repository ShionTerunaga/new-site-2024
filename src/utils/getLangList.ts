import { lang } from "@/shared/static/lang"

export const getLangList = (): Record<string, string>[] => {
    return lang.map((ln) => {
        return {
            lang: ln
        }
    })
}
