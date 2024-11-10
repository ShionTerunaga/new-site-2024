import { AboutComponent } from "@/features/about"
import { getLangList } from "@/utils/getLangList"

export const generateStaticParams = () => getLangList()

const About = ({ params: { lang } }: { params: { lang: string } }) => {
    return <AboutComponent lang={lang} />
}

export default About
