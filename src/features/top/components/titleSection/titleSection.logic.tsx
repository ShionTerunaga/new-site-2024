"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import TitleSectionView from "./titleSection.view"
import { routingPaths } from "@/shared/static/routingPaths"
import { topAnimation } from "@/shared/static/topAnimation"

const TitleSection = () => {
    const router = useRouter()
    const [counter, setCounter] = useState<number>(0)
    const [flag, setFlag] = useState<boolean>(true)

    useEffect(() => {
        if (counter === 0) setFlag(true)

        if (counter < topAnimation.length) {
            setTimeout(() => {
                setCounter(counter + 1)
            }, 3000)
        }

        if (counter === topAnimation.length) {
            setTimeout(() => {
                setFlag(false)
                router.push(routingPaths.home)
            }, 500)
        }
    }, [counter, router])

    return <TitleSectionView counter={counter} flag={flag} />
}

export default TitleSection
