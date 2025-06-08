import fs from "fs";
import { contentsPath } from "./get-contents.data";
import { isOverviewContents, OverviewContents } from "./get-contents.type";
import { jsonPerse } from "@/utils/json-perse";
import { Language } from "@/utils/lang";
import { RESULT_ERROR } from "@/utils/result";

export const getAllContents = (lang: Language) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`);

    const response: OverviewContents[] = pullFolders.map((item) => {
        const path = `${contentsPath}/${lang}/${item}`;

        const overviewFile = `${item}Overview.json`;

        const overviewStr = fs
            .readFileSync(`${path}/${overviewFile}`)
            .toString();
        const overviewParse = jsonPerse(overviewStr);

        if (overviewParse.kind === RESULT_ERROR) {
            throw overviewParse.err;
        }

        const value = overviewParse.value;

        if (!isOverviewContents(value)) {
            throw new Error("型が違います");
        }

        return value;
    });

    return response;
};
