import { style } from "@vanilla-extract/css"

const styles = {
    background: style({
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 999,
        bottom: 0,
        left: 0,
        opacity: 0.5,
        backgroundColor: "black"
    }),
    mainContainer: style({
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: 999,
        bottom: 0,
        left: 0,
        alignItems: "center"
    }),
    container: style({
        width: 300,
        height: 500,
        padding: 30,
        position: "absolute",
        zIndex: 999,
        backgroundColor: "white"
    })
}

export default styles
