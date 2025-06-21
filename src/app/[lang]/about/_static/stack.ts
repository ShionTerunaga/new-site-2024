import { i18n, Language } from "@/utils/lang";

export function getStack(lang: Language): string[] {
    const t = i18n(lang);

    const stacks: string[] = [
        t.about.tech.tech1,
        t.about.tech.tech2,
        t.about.tech.tech3,
        t.about.tech.tech4
    ];

    return stacks;
}
