import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        height: "100vh"
    }),
    iconBox: style({
        width: 100,
        height: 100,
        margin: "100px auto"
    }),
    greetingBox: style({
        width: 300,
        height: 100,
        margin: "auto",
        marginTop: "-75px",
        textAlign: "center",
        "@media": {
            "screen and (max-width:300px)": {
                width: "100%"
            }
        }
    }),
    name: style({
        fontSize: 32
    }),
    descriptionBox: style({
        marginTop: 12
    })
}

export default styles
