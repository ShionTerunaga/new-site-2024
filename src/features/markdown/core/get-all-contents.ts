import fs from "fs";
import { contentsPath } from "./get-contents.data";
import { OverviewContents } from "./get-contents.type";

export const getAllContents = (lang: string) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`);

    const response: OverviewContents[] = pullFolders.map((item) => {
        const path = `${contentsPath}/${lang}/${item}`;

        const overviewFile = `${item}Overview.json`;

        const overviewStr = fs
            .readFileSync(`${path}/${overviewFile}`)
            .toString();
        const overviewParse = JSON.parse(overviewStr) as OverviewContents;

        return overviewParse;
    });

    return response;
};
