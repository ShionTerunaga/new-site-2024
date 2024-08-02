import { style } from "@vanilla-extract/css"

const styles = {
    header: style({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        position: "fixed",
        zIndex: 2,
        width: "100vw",
        top: 0,
        backgroundColor: "black"
    }),
    heading1: style({
        color: "white"
    }),
    menuBox: style({
        width: 30
    })
}

export default styles
