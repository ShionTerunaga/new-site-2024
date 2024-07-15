import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        color: "black"
    }),
    header: style({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        fontSize: 10
    }),
    heading1: style({
        margin: 0
    }),
    button: style({
        backgroundColor: "white",
        marginRight: 5,
        border: "1px solid black",
        borderRadius: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ":hover": {
            backgroundColor: "rgba(0,0,0,0.2)",
            transition: "0.6s"
        }
    }),
    heading2: style({
        fontSize: 18,
        height: 50,
        display: "flex",
        alignItems: "center",
        margin: 0,
        marginTop: 10,
        marginBottom: 10
    }),
    description: style({
        height: 180
    })
}

export default styles
