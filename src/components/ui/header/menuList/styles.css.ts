import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        position: "fixed",
        width: "100vw",
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
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }),
    ul: style({
        margin: 0,
        padding: 0,
        right: 0,
        width: 300,
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }),
    li: style({
        fontSize: 30,
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: 10,
        borderBottom: "2px solid black",
        marginBottom: 30,
        textAlign: "center"
    }),
    link: style({
        textDecoration: "none",
        color: "black",
        width: 160,
        height: 33,
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
        position: "fixed",
        top: 5,
        right: 15,
        zIndex: 2,
        cursor: "pointer"
    })
}

export default styles
