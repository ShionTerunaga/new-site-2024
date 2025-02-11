import fs from "fs"
import { contentsPath } from "./getContents.data"
import { OverviewContents } from "./getContents.type"

export const getAllContents = (lang: string) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`)

    const response: OverviewContents[] = pullFolders.map((item) => {
        const path = `${contentsPath}/${lang}/${item}`

        const overviewFile = `${item}Overview.json`

        const overviewStr = fs
            .readFileSync(`${path}/${overviewFile}`)
            .toString()
        const overviewParse = JSON.parse(overviewStr) as OverviewContents

        return overviewParse
    })

    return response
}
