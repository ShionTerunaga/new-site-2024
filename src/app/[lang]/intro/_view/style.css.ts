import { style } from "@vanilla-extract/css";

const styles = {
    container: style({
        paddingBlock: "60px max(5vw, 50px)"
    }),
    title: style({
        marginTop: 40,
        fontSize: 32,
        textAlign: "center"
    }),
    contents1: style({
        margin: 0
    }),
    itemSection: style({
        width: 200,
        display: "flex"
    }),
    box: style({
        width: "min(90%, 900px)",
        margin: "20px auto",
        display: "flex",
        gap: "max(1em, 8px)",
        "@media": {
            "screen and (max-width:850px)": {
                width: "min(90%, 360px)",
                flexDirection: "column"
            }
        }
    })
};

export default styles;
