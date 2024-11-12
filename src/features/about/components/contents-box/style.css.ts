import { style } from "@vanilla-extract/css"

const styles = {
    section: style({
        margin: "0 auto 0",
        width: "min(90%, 900px)",
        borderRadius: 8,
        backgroundColor: "#333",
        padding: 20,
        fontSize: 22
    }),
    linkContainer: style({
        marginTop: 20
    }),
    link: style({
        color: "white"
    })
}

export default styles
