import { style } from "@vanilla-extract/css";

const styles = {
    background: style({
        position: "fixed",
        inset: 0,
        zIndex: 999,
        backgroundColor: "rgb(0 0 0/.5)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)"
    }),
    mainContainer: style({
        position: "fixed",
        inset: 0,
        zIndex: 999,
        display: "grid",
        placeItems: "center"
    }),
    container: style({
        width: 300,
        height: 500,
        padding: 30,
        position: "absolute",
        zIndex: 1000,
        backgroundColor: "white"
    })
};

export default styles;
