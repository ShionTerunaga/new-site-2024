import { style } from "@vanilla-extract/css";

const styles = {
    section: style({
        margin: "0 auto 0",
        width: "min(90%, 900px)",
        borderRadius: 8,
        backgroundColor: "#333",
        fontSize: 22,
        padding: "1em",
        "@media": {
            "(width < 768px)": {
                fontSize: 16
            }
        }
    }),
    linkContainer: style({
        marginTop: 20
    }),
    link: style({
        color: "white"
    })
};

export default styles;
