import fs from "fs"
import { contentsPath } from "./getContents.data"
import { overviewContents } from "./getContents.type"

export const getAllContents = (lang: string) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`)

    const response: overviewContents[] = pullFolders.map((item) => {
        const path = `${contentsPath}/${lang}/${item}`

        const overviewFile = `${item}Overview.json`

        const overviewStr = fs
            .readFileSync(`${path}/${overviewFile}`)
            .toString()
        const overviewParse = JSON.parse(overviewStr) as overviewContents

        return overviewParse
    })

    return response
}
