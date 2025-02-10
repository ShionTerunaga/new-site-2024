import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderRadius: 8,
        marginTop: 4,
        display: "flex",
        padding: 8,
        color: "red"
    }),
    circleX: style({
        fontSize: 20,
        marginTop: 2,
        color: "red",
        borderRadius: "50%"
    }),
    text: style({
        whiteSpace: "pre-wrap",
        marginLeft: 10,
        color: "white"
    })
}

export default styles
