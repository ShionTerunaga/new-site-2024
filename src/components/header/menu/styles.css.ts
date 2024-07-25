import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        position: "relative",
        width: 200,
        height: "100vh"
    }),
    button: style({
        backgroundColor: "black",
        color: "white",
        border: "none",
        height: 30,
        width: 30,
        fontSize: 40,
        marginRight: 15,
        position: "absolute",
        zIndex: 2,
        ":hover": {
            fontSize: 50,
            transition: "0.6s"
        }
    })
}

export default styles
