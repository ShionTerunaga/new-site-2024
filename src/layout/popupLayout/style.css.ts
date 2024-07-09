import { style } from "@vanilla-extract/css"

const styles = {
    background: style({
        width: "100vw",
        height: "100vw",
        position: "relative",
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: "black"
    }),
    container: style({
        width: 200,
        height: 300,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)"
    })
}

export default styles
