import { AboutComponent } from "./view/about"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

type props = Promise<{
    lang: string
}>

const About = async ({ params }: { params: props }) => {
    const { lang } = await params

    return <AboutComponent currentLang={lang} />
}

export default About
