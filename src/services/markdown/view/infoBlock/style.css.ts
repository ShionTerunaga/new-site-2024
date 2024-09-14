import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        backgroundColor: "rgba(51, 204, 255, 0.5)",
        borderRadius: 8,
        display: "flex",
        padding: 8,
        marginTop: 4
    }),
    info: style({
        color: "blue",
        marginLeft: 10,
        borderRadius: "50%"
    }),
    text: style({
        whiteSpace: "pre-wrap",
        marginLeft: 10
    })
}

export default styles
