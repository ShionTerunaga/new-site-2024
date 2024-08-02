import { style } from "@vanilla-extract/css"

const styles = {
    background: style({
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: 6,
        opacity: 0.5,
        backgroundColor: "black"
    }),
    container: style({
        width: 250,
        height: 300,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        zIndex: 7,
        backgroundColor: "white"
    })
}

export default styles
