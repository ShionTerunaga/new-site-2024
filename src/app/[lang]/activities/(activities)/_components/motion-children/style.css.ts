import { style } from "@vanilla-extract/css";

const styles = {
    box: style({
        marginBottom: 10,
        listStyle: "none",
        "::marker": {
            fontSize: 24
        }
    }),
};

export default styles;
