import fs from "fs"
import path from "path"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import { contentsPath } from "./get-contents.data"
import type { Contents, OverviewContents } from "./get-contents.type"
import "highlight.js/styles/vs2015.min.css"
import { remarkUIComponent } from "./remark-ui-component"

export const getContents = (id: string, lang: string) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`)

    const subResponse: Contents[] = pullFolders.map((item) => {
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
        const overviewParse = JSON.parse(overviewStr) as OverviewContents

        return {
            source: source,
            overview: overviewParse
        }
    })

    const filterResponse: Contents[] = subResponse.filter(
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
