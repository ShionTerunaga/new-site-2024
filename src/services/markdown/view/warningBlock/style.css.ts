import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        backgroundColor: "rgba(255, 255, 51, 0.5)",
        marginTop: 4,
        borderRadius: 8,
        display: "flex",
        padding: 8
    }),
    triangle: style({
        color: "#FF9933",
        marginLeft: 10
    }),
    text: style({
        whiteSpace: "pre-wrap",
        marginLeft: 10
    })
}

export default styles
