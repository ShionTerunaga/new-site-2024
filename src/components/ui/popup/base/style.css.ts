import { style } from "@vanilla-extract/css"

const styles = {
    background: style({
        width: "100vw",
        height: "100vh",
        position: "absolute",
        zIndex: 997,
        top: 0,
        left: 0,
        opacity: 0.5,
        backgroundColor: "black"
    }),
    mainContainer: style({
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: 999,
        top: 0,
        left: 0,
        alignItems: "center"
    }),
    container: style({
        width: 250,
        height: 500,
        position: "absolute",
        zIndex: 999,
        backgroundColor: "white"
    })
}

export default styles
