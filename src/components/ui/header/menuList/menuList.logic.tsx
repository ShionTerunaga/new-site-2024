"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import MenuView from "./menuList.view"

interface props {
    lang: string
}

const MenuList = (props: props) => {
    const path = usePathname()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <MenuView
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleClick={handleClick}
            path={path}
            {...props}
        />
    )
}

export default MenuList
