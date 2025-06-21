import { CompileOptions } from "@mdx-js/mdx";

export interface OverviewContents {
    id: string;
    title: string;
    date: number;
    description: string;
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
        "description" in obj &&
        typeof obj.description === "string"
    );
}
