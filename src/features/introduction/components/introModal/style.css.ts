import { style } from "@vanilla-extract/css"

const styles = {
    button: style({
        width: 150,
        height: 50,
        border: "1px solid white",
        borderRadius: 4,
        backgroundColor: "white",
        color: "black",
        marginBottom: 5,
        ":hover": {
            boxShadow: "0 0 20px yellow",
            transition: "0.6s"
        },
        fontSize: 24
    })
}

export default styles
