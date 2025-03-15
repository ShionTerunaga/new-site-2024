import { style } from "@vanilla-extract/css";

const styles = {
    intro: style({
        margin: "30px auto 0",
        width: "min(90%, 900px)",
        borderRadius: 8,
        backgroundColor: "#333",
        paddingBlock: 25
    }),
    box: style({
        display: "flex",
        selectors: {
            "&~&": {
                marginTop: 25
            }
        },
        "@media": {
            "(width < 850px)": {
                flexDirection: "column",
                alignItems: "center"
            }
        }
    }),
    titleBox: style({
        width: "max(24%, 180px)",
        fontSize: 18,
        display: "grid",
        paddingInline: 20,
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
    introductionContents: style({
        flex: "1",
        padding: "2em 20px",
        fontSize: 18,
        textAlign: "left",
        lineHeight: 1.7,
        "@media": {
            "(width < 850px)": {
                fontSize: 16,
                width: "fit-content",
                padding: "20px max(3vw, 14px) 2em"
            }
        }
    })
};

export default styles;
