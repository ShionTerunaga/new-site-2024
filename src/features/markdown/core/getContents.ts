import fs from "fs"
import path from "path"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import { contentsPath } from "./getContents.data"
import type { contents, overviewContents } from "./getContents.type"
import "highlight.js/styles/vs2015.min.css"
import { remarkUIComponent } from "./utils/remearkUIComponent"

export const getContents = (id: string, lang: string) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`)

    const subResponse: contents[] = pullFolders.map((item) => {
        const sourceFile = path.join(
            process.cwd(),
            "src",
            "contents",
            lang,
            item,
            `${item}.mdx`
        )
        const overviewFile = path.join(
            process.cwd(),
            "src",
            "contents",
            lang,
            item,
            `${item}Overview.json`
        )

        const source = fs.readFileSync(sourceFile, "utf8").toString()
        const overviewStr = fs.readFileSync(overviewFile, "utf8").toString()
        const overviewParse = JSON.parse(overviewStr) as overviewContents

        return {
            source: source,
            overview: overviewParse
        }
    })

    const filterResponse: contents[] = subResponse.filter(
        (item) => item.overview.id === id
    )

    const option = {
        mdxOptions: {
            remarkPlugins: [remarkGfm, remarkUIComponent],
            rehypePlugins: [rehypeHighlight]
        }
    }

    const response = {
        source: filterResponse[0].source,
        overview: filterResponse[0].overview,
        options: option
    }

    return response
}
