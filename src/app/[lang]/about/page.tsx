import { AboutComponent } from "@/features/about"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

type props = Promise<{
    lang: string
}>

const About = async ({ params }: { params: props }) => {
    const { lang } = await params

    return <AboutComponent lang={lang} />
}

export default About
