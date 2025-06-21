import { i18n, Language } from "@/utils/lang";

export function carrier(lang: Language) {
    const t = i18n(lang);

    return [
        { ...t.intro.carrier.list.highSchoolOut },
        { ...t.intro.carrier.list.universityIn },
        { ...t.intro.carrier.list.jobHunting },
        { ...t.intro.carrier.list.graduationResearch },
        { ...t.intro.carrier.list.universityOut },
        { ...t.intro.carrier.list.companyIn },
        { ...t.intro.carrier.list.ossStart }
    ];
}
