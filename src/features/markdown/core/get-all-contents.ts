import fs from "fs";
import matter from "gray-matter";
import * as yaml from "js-yaml";
import { contentsPath } from "./get-contents.data";
import {
    isOverviewContents,
    normalizeOverviewContents,
    OverviewContents
} from "./get-contents.type";
import { Language } from "@/utils/lang";

const matterOptions = {
    engines: {
        yaml: {
            parse: (value: string) => yaml.load(value) ?? {}
        }
    }
};

export const getAllContents = (lang: Language) => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`);

    const response: OverviewContents[] = pullFolders.map((item) => {
        const path = `${contentsPath}/${lang}/${item}`;

        const overviewFile = `${item}.mdx`;

        const overviewStr = fs.readFileSync(`${path}/${overviewFile}`);

        const { data } = matter(overviewStr, matterOptions);
        const overview = normalizeOverviewContents(
            data as Parameters<typeof normalizeOverviewContents>[0]
        );

        if (!isOverviewContents(overview)) {
            throw new Error(`${JSON.stringify(data)}`);
        }

        return overview;
    });

    return response;
};
