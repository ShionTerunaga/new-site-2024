import { introType } from "./introduction.type"
import SPITZ from "@/assets/introduction/spitz.png"
import YAKINIKU from "@/assets/introduction/yakiniku.png"
import { en } from "@/shared/lang/en"

export const introData: introType[] = [
    {
        title: en.intro.introData.intro1.title,
        headerContents: en.intro.introData.intro1.headerContents,
        bodyContents: en.intro.introData.intro1.bodyContents,
        image: YAKINIKU
    },
    {
        title: en.intro.introData.intro2.title,
        headerContents: en.intro.introData.intro2.headerContents,
        bodyContents: en.intro.introData.intro2.bodyContents
    },
    {
        title: en.intro.introData.intro3.title,
        headerContents: en.intro.introData.intro3.headerContents,
        bodyContents: en.intro.introData.intro3.bodyContents
    },
    {
        title: en.intro.introData.intro4.title,
        headerContents: en.intro.introData.intro4.headerContents,
        bodyContents: en.intro.introData.intro4.bodyContents,
        image: SPITZ
    }
]
