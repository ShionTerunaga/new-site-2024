import { style } from "@vanilla-extract/css"

const styles = {
    header: style({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50
    }),
    heading1: style({
        color: "white"
    }),
    menuBox: style({
        width: 30
    })
}

export default styles
