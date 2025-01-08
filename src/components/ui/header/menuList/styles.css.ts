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
        width: 200,
        listStyle: "none"
    }),
    li: style({
        fontSize: 30,
        width: "100%",
        padding: 10,
        borderBottom: "2px solid black",
        margin: "0 0 30px 0",
        textAlign: "center"
    }),
    link: style({
        textDecoration: "none",
        color: "black",
        ":hover": {
            color: "silver"
        }
    }),
    p: style({
        margin: 0
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
        display: "grid",
        placeItems: "center",
        fontSize: 32,
        cursor: "pointer",
        position: "relative",
        zIndex: 101
    })
}

export default styles
