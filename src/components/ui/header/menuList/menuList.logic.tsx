"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import MenuView from "./menuList.view"

const MenuList = () => {
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
        />
    )
}

export default MenuList
