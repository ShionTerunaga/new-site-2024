export function routingPath(lang: string) {
    const locale = "/" + lang;

    return {
        home: `${locale}/home`,
        intro: `${locale}/intro`,
        skills: `${locale}/skills`,
        activity: `${locale}/activities`,
        about: `${locale}/about`
    };
}
