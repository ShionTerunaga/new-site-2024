import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        position: "absolute",
        width: 200,
        height: "100vh",
        top: 0,
        right: 0
    }),
    opacity1: style({
        opacity: 1
    }),
    opacity0: style({
        opacity: 0
    }),
    close: style({
        color: "red"
    }),
    menuBox: style({
        width: 200,
        height: "100%",
        backgroundColor: "white",
        zIndex: 3,
        display: "flex"
    }),
    ul: style({
        margin: 0,
        padding: 0,
        position: "absolute",
        height: 400,
        top: "30%",
        transform: "translateY(-50%)",
        right: 0,
        width: 160,
        listStyle: "none",
        display: "flex",
        alignItems: "center"
    }),
    li: style({
        width: 160,
        height: 60,
        fontSize: 26,
        display: "flex",
        alignItems: "center",
        borderBottom: "2px solid black",
        marginBottom: 10,
        textAlign: "left"
    }),
    link: style({
        textDecoration: "none",
        color: "black",
        ":hover": {
            color: "silver"
        }
    }),
    p: style({
        margin: 0,
        width: 160,
        height: 30
    }),
    openButton: style({
        color: "white"
    }),
    closeButton: style({
        color: "black"
    }),
    button: style({
        backgroundColor: "transparent",
        border: "none",
        height: 30,
        width: 30,
        fontSize: 40,
        position: "absolute",
        top: 5,
        right: 15,
        zIndex: 2,
        cursor: "pointer"
    })
}

export default styles
