import fs from "fs";
import matter from "gray-matter";
import { contentsPath } from "./get-contents.data";
import { isOverviewContents, OverviewContents } from "./get-contents.type";
import { Language } from "@/utils/lang";

export const getAllContents = (lang: Language) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`);

    const response: OverviewContents[] = pullFolders.map((item) => {
        const path = `${contentsPath}/${lang}/${item}`;

        const overviewFile = `${item}.mdx`;

        const overviewStr = fs.readFileSync(`${path}/${overviewFile}`);

        const { data } = matter(overviewStr);

        if (!isOverviewContents(data)) {
            throw new Error(`${JSON.stringify(data)}`);
        }

        return data;
    });

    return response;
};
