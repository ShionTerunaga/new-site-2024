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
        margin: "-75px auto",
        textAlign: "center",
        fontSize: 24,
        "@media": {
            "screen and (max-width:300px)": {
                width: "100%"
            }
        }
    })
}

export default styles
