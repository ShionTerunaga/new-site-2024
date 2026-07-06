import fs from "fs";
import path from "path";
import matter from "gray-matter";
import * as yaml from "js-yaml";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { contentsPath } from "./get-contents.data";
import {
    isOverviewContents,
    normalizeOverviewContents,
    type Contents
} from "./get-contents.type";
import "highlight.js/styles/vs2015.min.css";
import { remarkUIComponent } from "./remark-ui-component";
import { Language } from "@/utils/lang";

const matterOptions = {
    engines: {
        yaml: {
            parse: (value: string) => yaml.load(value) ?? {}
        }
    }
};

export const getContents = (id: string, lang: Language): Contents => {
    const pullFolders = fs.readdirSync(`${contentsPath}/${lang}`);

    const subResponse: Contents[] = pullFolders.map((item) => {
        const sourceFile = path.join(
            process.cwd(),
            "src",
            "contents",
            lang,
            item,
            `${item}.mdx`
        );

        const source = fs.readFileSync(sourceFile, "utf8");
        const { data, content } = matter(source, matterOptions);
        const overview = normalizeOverviewContents(
            data as Parameters<typeof normalizeOverviewContents>[0]
        );

        if (!isOverviewContents(overview)) {
            throw new Error(`型が違います${JSON.stringify(data)}`);
        }

        return {
            source: content,
            overview
        };
    });

    const filterResponse: Contents[] = subResponse.filter(
        (item) => item.overview.id === id
    );

    const option = {
        mdxOptions: {
            remarkPlugins: [remarkGfm, remarkUIComponent],
            rehypePlugins: [rehypeHighlight]
        }
    };

    const response = {
        source: filterResponse[0].source,
        overview: filterResponse[0].overview,
        options: option
    };

    return response;
};
