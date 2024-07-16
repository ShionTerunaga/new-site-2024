import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        textAlign: "center"
    }),
    title: style({
        fontSize: 32
    }),
    contents1: style({
        margin: 0
    }),
    itemSection: style({
        width: 200,
        display: "flex"
    }),
    box: style({
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        gap: 4,
        "@media": {
            "screen and (max-width:400px)": {
                width: 150,
                display: "block",
                gap: 0,
                textAlign: "center",
                backgroundColor: "white"
            }
        }
    })
}

export default styles
