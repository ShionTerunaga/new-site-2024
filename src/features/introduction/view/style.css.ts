import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        height: "100vh",
        color: "white",
        textAlign: "center",
        overflow: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "::-webkit-scrollbar": {
            display: "none"
        }
    }),
    title: style({
        marginTop: 100,
        fontSize: 32
    }),
    title2: style({
        marginTop: 40,
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
        width: "50%",
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-around",
        "@media": {
            "screen and (max-width:470px)": {
                width: 170,
                display: "block",
                gap: 0,
                textAlign: "center"
            }
        }
    })
}

export default styles
