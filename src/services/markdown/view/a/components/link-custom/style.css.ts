import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        textDecoration: "none"
    }),
    contents: style({
        display: "flex",
        justifyContent: "space-between"
    }),
    picture: style({
        height: 73,
        display: "flex",
        justifyContent: "flex-start",
        borderStartEndRadius: 7,
        borderEndEndRadius: 7
    }),
    img: style({
        borderStartEndRadius: 7,
        borderEndEndRadius: 7,
        pointerEvents: "none",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        userSelect: "none",
        objectFit: "contain",
        objectPosition: "right",
        width: "auto"
    }),
    textContents: style({
        width: "100%",
        overflow: "auto",
        whiteSpace: "nowrap",
        padding: 10,
        marginRight: 5,
        "::-webkit-scrollbar": {
            display: "none"
        }
    }),
    title: style({
        width: "100%",
        fontSize: 18,
        marginBottom: 20,
        color: "white"
    }),
    description: style({
        color: "silver",
        marginTop: 5,
        fontSize: 10
    })
}

export default styles
