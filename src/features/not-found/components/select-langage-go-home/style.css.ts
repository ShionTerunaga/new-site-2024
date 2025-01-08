import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        display: "flex",
        justifyContent: "center"
    }),
    wholeBox: style({
        width: 130,
        height: 150,
        position: "relative",
        border: "none",
        marginTop: 10
    }),

    button: style({
        width: 130,
        height: 35,
        border: "1px solid #333",
        color: "white",
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
        backgroundColor: "#666",
        width: 130,
        padding: 0,
        marginTop: 2,
        textAlign: "center",
        borderRadius: 5,
        border: "1px solid #333",
        listStyle: "none",
        position: "absolute",
        //inset: "auto 0 -4.1em",
        marginInline: "auto",
        overflow: "hidden",
        transitionProperty: "opacity, translate",
        transitionDuration: ".6s"
    }),
    list: style({
        listStyle: "none",
        height: 25,
        borderBottom: "1px solid #333",
        margin: 5,

        ":last-child": {
            borderBottom: "none"
        }
    }),
    link: style({
        textDecoration: "none",
        color: "white",
        ":hover": {
            color: "silver"
        }
    })
}

export default styles
