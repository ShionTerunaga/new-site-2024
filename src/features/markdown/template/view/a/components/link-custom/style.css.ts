import { style } from "@vanilla-extract/css";

const styles = {
    container: style({
        textDecoration: "none"
    }),
    contents: style({
        display: "flex",
        justifyContent: "space-between"
    }),
    picture: style({
        height: 120,
        width: 380,
        display: "flex",
        justifyContent: "flex-end",
        overflow: "hidden",
        "@media": {
            "(max-width:580px)": {
                width: 200
            }
        }
    }),
    img: style({
        pointerEvents: "none",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        userSelect: "none",
        objectFit: "contain",
        objectPosition: "right"
    }),
    link: style({
        width: "100%",
        margin: 10
    }),
    textContents: style({
        width: "100%",
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
};

export default styles;
