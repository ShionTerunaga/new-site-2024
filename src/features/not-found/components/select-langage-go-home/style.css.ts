import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        display: "flex",
        justifyContent: "center"
    }),
    wholeBox: style({
        width: 110,
        height: 150,
        position: "relative",
        border: "none",
        marginTop: 10
    }),
    dropBox: style({
        listStyle: "none",
        position: "absolute",
        inset: "auto 0 -4.1em",
        marginInline: "auto",
        borderRadius: 4,
        width: 150,
        overflow: "hidden",
        transitionProperty: "opacity, translate",
        transitionDuration: ".6s"
    }),
    button: style({
        width: 110,
        height: 35,
        backgroundColor: "white",
        color: "black",
        border: "none",
        borderRadius: 5,
        textAlign: "center",
        ":active": {
            opacity: 0.7
        }
    }),
    hidden: style({
        pointerEvents: "none",
        opacity: 0,
        translate: "0 -30px"
    }),
    show: style({
        pointerEvents: "auto",
        opacity: 1,
        translate: 0
    }),
    listContainer: style({
        backgroundColor: "white",
        width: 110,
        padding: 0,
        marginTop: 2,
        textAlign: "center",
        borderRadius: 5
    }),
    list: style({
        listStyle: "none",
        height: 25,
        borderBottom: "1px solid black",
        margin: 5,
        ":last-child": {
            borderBottom: "none"
        }
    }),
    link: style({
        textDecoration: "none",
        color: "black",
        ":hover": {
            color: "silver"
        }
    })
}

export default styles
