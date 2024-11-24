"use client"

import { useEffect, useState } from "react"
import CardContainerView from "./cardContainer.view"
import { cardType } from "@/components/ui/card"

interface props {
    index: number
    item: cardType
    lang: string
}

const CardContainer = (props: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        console.log(isOpen)
        setIsOpen(true)
    }, [])

    return <CardContainerView {...props} isOpen={isOpen} />
}

export default CardContainer
