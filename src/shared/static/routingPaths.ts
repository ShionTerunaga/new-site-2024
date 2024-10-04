export const routingPath = (lang: string) => {
    const locale = "/" + lang

    return {
        home: `${locale}/home`,
        intro: `${locale}/intro`,
        skills: `${locale}/skills`,
        activity: `${locale}/activities`
    }
}

export const routingPaths = {
    home: "/home",
    intro: "/intro",
    skills: "/skills",
    activity: "/activities"
}
