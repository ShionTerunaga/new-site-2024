import { style } from "@vanilla-extract/css"

const styles = {
    box: style({
        // width: 202,
        // height: 252,
        backgroundColor: "#333",
        // border: "1px solid silver",
        borderRadius: 5,
        color: "#fff",
        // boxShadow: "0 0 10px white",

        padding: "1em",
        height: '100%',
        transition: "0.4s",

        ":hover": {
            boxShadow: "0 0 15px 4px skyBlue",
        }
    }),
    picture: style({
        // width: "100%",
        // height: 125
    }),
    image: style({
        borderStartStartRadius: 3,
        borderStartEndRadius: 3,
        pointerEvents: "none",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        userSelect: "none",

        width: "100%",
        objectFit: 'contain'
    }),
    textBox: style({
        // width: "100%",
        // height: 125
    }),
    noneContents: style({
        // width: "100%",
        // height: 125,
        display: "flex",
        marginTop: 30,
        justifyContent: "center"
    }),
    h2: style({
        marginTop: '.3em',
        textAlign: 'center'
    }),
    descriptionBox: style({
        // width: 200,
        // height: 70,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }),
    description: style({
        // color: "black",
        marginTop: 10,
        overflowWrap: "break-word"
    })
}

export default styles
