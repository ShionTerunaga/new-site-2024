import { style } from "@vanilla-extract/css";

export const dropLi = style({});
const styles = {
    selectLang: style({
        position: "relative",
        border: "none"
    }),
    box: style({
        backgroundColor: "transparent",
        border: "1px solid #333",
        borderRadius: 4,
        padding: ".6em 1em",
        display: "flex",
        alignItems: "center",
        gap: "1em"
    }),
    label: style({
        color: "#666"
    }),
    lang: style({
        width: "2em",
        textAlign: "right"
    }),
    arrow: style({
        position: "relative",
        width: 6,
        aspectRatio: "1/1",
        color: "#666",
        rotate: "45deg",
        "::before": {
            content: "",
            position: "absolute",
            inset: 0,
            borderRight: "1px solid",
            borderBottom: "1px solid"
        }
    }),
    dropBox: style({
        listStyle: "none",
        position: "absolute",
        inset: "auto 0 -4.1em",
        marginInline: "auto",
        borderRadius: 4,
        width: 100,
        overflow: "hidden",
        transitionProperty: "opacity, translate",
        transitionDuration: ".6s"
    }),
    hidden: style({
        pointerEvents: "none",
        opacity: 0,
        translate: "0 -30px"
    }),
    show: style({
        pointerEvents: "auto",
        opacity: 1,
        translate: 0
    }),
    langLink: style({
        color: "#fff",
        textDecoration: "none",
        width: "100%",
        display: "block",
        padding: ".4em .8em",
        backgroundColor: "#333",
        textAlign: "left",
        border: "none",
        margin: "auto",
        transition: "background-color .4s",
        ":hover": {
            backgroundColor: "#666"
        },
        selectors: {
            [`${dropLi} ~ ${dropLi} &`]: {
                borderTop: "1px solid #444"
            }
        }
    })
};
export default styles;
