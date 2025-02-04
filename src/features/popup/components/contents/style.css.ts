import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        color: "black"
    }),
    header: style({
        textAlign: "left",
        display: "flex",
        justifyContent: "right",
        alignItems: "center",
        height: 50
    }),
    button: style({
        width: 33,
        height: 33,
        fontSize: 33,
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
        fontSize: 29,
        height: 50,
        display: "flex",
        alignItems: "center",
        margin: 0,
        marginTop: 20,
        marginBottom: 10
    }),
    description: style({
        marginTop: 20,
        height: 160,
        fontSize: 22
    })
}

export default styles
