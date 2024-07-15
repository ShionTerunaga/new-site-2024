import { style } from "@vanilla-extract/css"

const styles = {
    header: style({
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }),
    heading1: style({
        color: "white"
    }),
    button: style({
        backgroundColor: "black",
        color: "white",
        border: "none",
        height: 30,
        width: 30,
        fontSize: 40,
        marginRight: 15,
        ":hover": {
            color: "yellow"
        }
    })
}

export default styles
