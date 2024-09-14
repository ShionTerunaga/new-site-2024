import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        backgroundColor: "rgba(255, 0, 0, 0.5)",
        borderRadius: 8,
        marginTop: 4,
        display: "flex",
        padding: 8
    }),
    circleX: style({
        color: "red",
        marginLeft: 10,
        borderRadius: "50%"
    }),
    text: style({
        whiteSpace: "pre-wrap",
        marginLeft: 10
    })
}

export default styles
