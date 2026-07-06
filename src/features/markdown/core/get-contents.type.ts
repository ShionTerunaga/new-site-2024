import { CompileOptions } from "@mdx-js/mdx";
import emojiRegex from "emoji-regex";

export interface OverviewContents {
    id: string;
    title: string;
    date: number;
    icon: string;
}

type MdxOptions = Omit<
    CompileOptions,
    "outputFormat" | "providerImportSource"
> & {
    useDynamicImport?: boolean;
};
export interface Contents {
    source: string;
    overview: OverviewContents;
    options?: {
        mdxOptions?: MdxOptions;
    };
}

type OverviewContentsInput = Omit<OverviewContents, "date"> & {
    date: string | number | Date;
};

export function isOverviewContents(obj: unknown): obj is OverviewContents {
    if (typeof obj !== "object") return false;

    if (obj === null) return false;

    return (
        "id" in obj &&
        typeof obj.id === "string" &&
        "title" in obj &&
        typeof obj.title === "string" &&
        "date" in obj &&
        typeof obj.date === "number" &&
        Number.isFinite(obj.date) &&
        "icon" in obj &&
        typeof obj.icon === "string" &&
        isOnlyUnicodeEmoji(obj.icon)
    );
}

export function normalizeOverviewContents(
    obj: OverviewContentsInput
): OverviewContents {
    const date =
        obj.date instanceof Date
            ? obj.date.getTime()
            : new Date(obj.date).getTime();

    return {
        ...obj,
        date
    };
}

export function isOnlyUnicodeEmoji(input: string): boolean {
    const regex = emojiRegex();
    const matched = input.match(regex);

    return matched !== null && matched.join("") === input;
}
