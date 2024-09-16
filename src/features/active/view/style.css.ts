import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        margin: "100px auto",
        width: 630,
        "@media": {
            "screen and (max-width:630px)": {
                width: "80%"
            }
        }
    }),
    heading: style({
        textAlign: "center",
        fontSize: 32
    }),
    contents: style({
        width: "80%",
        borderRadius: 8,
        margin: "15px auto",
        boxShadow: "0 0 10px rgba(255,255,255,0.8)",
        backgroundColor: "white",
        padding: 20,
        color: "black"
    }),
    contentsBody: style({
        width: 590,
        margin: "auto",
        "@media": {
            "screen and (max-width:630px)": {
                width: 260,
                margin: "auto"
            }
        }
    })
}

export default styles
