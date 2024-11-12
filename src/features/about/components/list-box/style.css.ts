import { style } from "@vanilla-extract/css"

const styles = {
    section: style({
        margin: "0 auto 0",
        width: "min(90%, 900px)"
    }),
    container: style({
        width: "100%",
        borderRadius: 8,
        backgroundColor: "#333",
        padding: "20px 20px 20px 40px"
    }),
    list: style({
        fontSize: 22,
        paddingTop: 15
    }),
    titleBox: style({
        display: "grid",
        paddingInline: 20,
        width: "max(24%, 180px)",
        placeItems: "center",
        borderRight: "1px solid #555",
        "@media": {
            "(width < 850px)": {
                width: "fit-content",
                paddingBottom: ".6em",
                borderRight: "none",
                borderBottom: "1px solid #555"
            }
        }
    }),
    title: style({
        fontSize: 18
    }),
    introductionContents: style({
        flex: "1",
        padding: "2em 20px",
        fontSize: 18,
        display: "flex",
        textAlign: "left",
        lineHeight: 1.6,
        "@media": {
            "(width < 850px)": {
                fontSize: 16,
                padding: "20px 0 0"
            }
        }
    })
}

export default styles
