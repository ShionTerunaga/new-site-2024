import { carrierType } from "./carrier.type"
import { en } from "@/shared/lang/en"

export const carrier: carrierType[] = [
    { ...en.intro.carrier.list.highSchoolOut },
    { ...en.intro.carrier.list.universityIn },
    { ...en.intro.carrier.list.jobHunting },
    { ...en.intro.carrier.list.graduationResearch },
    { ...en.intro.carrier.list.universityOut },
    { ...en.intro.carrier.list.companyIn },
    { ...en.intro.carrier.list.ossStart }
]
