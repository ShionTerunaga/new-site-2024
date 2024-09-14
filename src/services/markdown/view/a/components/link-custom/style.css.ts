import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        textDecoration: "none"
    }),
    contents: style({
        display: "flex"
    }),
    picture: style({
        width: 150,
        height: 75,
        marginRight: 20
    }),
    img: style({
        borderStartStartRadius: 6,
        borderEndStartRadius: 6
    }),
    textContents: style({
        width: "100%",
        overflow: "auto",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center"
    }),
    title: style({
        width: "100%",
        fontSize: 22,
        marginBottom: 20,
        color: "black"
    }),
    description: style({
        color: "silver",
        marginTop: 5
    })
}

export default styles
