import { style } from "@vanilla-extract/css"

export const dropLi = style({})

const styles = {
    header: style({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "5vw",
        height: 66,
        position: "fixed",
        inset: "0 0 auto",
        zIndex: 100,
        backgroundColor: "rgb(0 0 0/0.7)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)"
    }),
    isHome: style({
        justifyContent: "end",
    }),
    heading1: style({
        color: "white"
    }),
    right: style({
        display: "flex",
        alignItems: "center",
        gap: "5vw"
    })
}

export default styles
