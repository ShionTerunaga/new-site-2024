import { JSDOM } from "jsdom"
import { linkDict } from "./get-url-contents.type"

export const getUrlContents = async (url: string) => {
    const twitterPost = url.match(/https:\/\/x\.com\/([\w]+)\/status\/([\d]+)/)

    if (twitterPost) {
        return {
            url: url
        }
    }

    const twitterHome = url.match(/^https?:\/\/x\.com/g)

    if (twitterHome !== null) {
        return {
            "og:title": url,
            "og:image":
                "https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png"
        } as linkDict
    }

    const res = await fetch(url)

    if (!res.ok) {
        throw new Error("response is failed")
    }

    const html = await res.text()
    const DOM = new JSDOM(html)
    const meta = DOM.window.document.head.querySelectorAll("meta")

    const dict: linkDict = {}

    meta.forEach((item) => {
        const hasProperty = item.getAttribute("property")

        if (!hasProperty) return

        const ogpProperty = hasProperty.match(/og:([\w]+)/g)

        if (!ogpProperty) return

        const option = hasProperty.match(/og:[\w]+:[\w]+/g)

        if (option) return

        dict[ogpProperty[0]] = item.getAttribute("content")
    })

    return dict
}
