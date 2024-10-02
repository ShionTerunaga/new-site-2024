import { style } from "@vanilla-extract/css"

const styles = {
    box: style({
        backgroundColor: "#333",
        borderRadius: 5,
        color: "#fff",
        padding: "1em",
        height: '100%',
        transition: "0.4s",

        ":hover": {
            boxShadow: "0 0 15px 4px skyBlue",
        }
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
    noneContents: style({
        display: "flex",
        marginTop: 30,
        justifyContent: "center"
    }),
    h2: style({
        marginTop: '.3em',
        textAlign: 'center'
    }),
    descriptionBox: style({
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }),
    description: style({
        marginTop: 10,
        overflowWrap: "break-word"
    })
}

export default styles
