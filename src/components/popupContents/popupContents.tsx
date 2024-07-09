"use client"

import { X } from "@yamada-ui/lucide"
import { usePopup } from "@/hooks/popup"

interface props {
    title: string
    answer: string
    description: string
}

const PopupContents = (props: props) => {
    const { closePopup } = usePopup()

    return (
        <div>
            <div>
                <h1>
                    {props.title}　{props.answer}
                </h1>
                <button onClick={closePopup}>
                    <X />
                </button>
            </div>
            <div>{props.description}</div>
        </div>
    )
}

export default PopupContents
