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
    icon: style({
        borderRadius: "50%"
    })
}

export default styles
