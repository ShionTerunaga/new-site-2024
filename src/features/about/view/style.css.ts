import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        paddingBlock: "60px max(5vw, 50px)"
    }),
    title: style({
        marginTop: 40,
        fontSize: 32,
        textAlign: "center"
    }),
    subTitle: style({
        padding: '20px 5vw',
        fontSize: 26,
        textAlign: "center",
        selectors: {
            "& ~ &": {
                paddingTop: "max(3vw, 40px)"
            }
        },
        "@media": {
            "(width < 768px)": {
                textAlign: "left",
                fontSize: 20
            }
        }
    }),
    detail: style({
        padding: 20,
        width: "fit-content",
        marginInline: "auto"
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
}

export default styles
