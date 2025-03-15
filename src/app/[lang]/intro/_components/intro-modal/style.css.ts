import { style } from "@vanilla-extract/css";

const styles = {
    button: style({
        paddingBlock: "1em",
        textAlign: "center",
        flex: "1",
        borderRadius: 5,
        border: "none",
        backgroundColor: "#333",
        transition: "box-shadow 0.4s",
        ":hover": {
            boxShadow: "0 0 15px 4px skyBlue"
        },
        fontSize: 20
    })
};

export default styles;
