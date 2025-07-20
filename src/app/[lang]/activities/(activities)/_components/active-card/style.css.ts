import { style } from "@vanilla-extract/css";

const styles = {
    box: style({
        backgroundColor: "#333",
        borderRadius: 5,
        color: "#fff",
        padding: "1em",
        height: "100%",
        transition: "box-shadow 0.4s",
        ":hover": {
            boxShadow: "0 0 15px 4px skyBlue"
        }
    }),
    icon: style({
        height: 125,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 42
    }),
    h3: style({
        textAlign: "center",
        margin: 0
    })
};

export default styles;
