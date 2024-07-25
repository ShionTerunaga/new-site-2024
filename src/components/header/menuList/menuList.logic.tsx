"use client"

import { useState } from "react"
import MenuView from "./menuList.view"

const MenuList = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <MenuView
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            handleClick={handleClick}
        />
    )
}

export default MenuList
