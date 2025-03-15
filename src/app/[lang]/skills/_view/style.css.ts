import { style } from "@vanilla-extract/css";

const styles = {
    container: style({
        overflow: "auto",
        width: "100vw",
        height: "100vh",
        paddingTop: 50
    }),
    space: style({
        height: 70
    })
};

export default styles;
