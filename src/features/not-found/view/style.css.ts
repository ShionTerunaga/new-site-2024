import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    }),
    section: style({
        width: 300
    }),
    heading: style({
        fontSize: 28
    }),
    comment: style({
        marginTop: 10
    })
}

export default styles
