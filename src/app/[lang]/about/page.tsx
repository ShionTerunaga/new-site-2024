import { AboutComponent } from "./view/about"
import { getLangList } from "@/utils/get-lang-list"

export const generateStaticParams = () => getLangList()

type Props = Promise<{
    lang: string
}>

const About = async ({ params }: { params: Props }) => {
    const { lang } = await params

    return <AboutComponent currentLang={lang} />
}

export default About
