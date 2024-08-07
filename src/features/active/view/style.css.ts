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
        textAlign: "center"
    }),
    contents: style({
        width: 630,
        marginTop: 15,
        backgroundColor: "white",
        color: "black",
        borderRadius: 8,
        "@media": {
            "screen and (max-width:630px)": {
                width: 300,
                margin: "10px auto"
            }
        }
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
