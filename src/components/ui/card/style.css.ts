import { style } from "@vanilla-extract/css"

export const box = style({
    backgroundColor: "#333",
    borderRadius: 5,
    color: "#fff",
    padding: "1em",
    height: "100%",
    transition: "box-shadow 0.4s",
    ":hover": {
        boxShadow: "0 0 15px 4px skyBlue"
    }
})
const styles = {
    isSkills: style({
        display: "grid",
        placeItems: "center",
        placeContent: "center",
        transitionProperty: "box-shadow, rotate",
        transitionDuration: ".4s",
        transformStyle: "preserve-3d",
        perspective: "100vmax",
        ":hover": {
            rotate: ".4 1 0 30deg"
        }
    }),
    image: style({
        borderStartStartRadius: 3,
        borderStartEndRadius: 3,
        pointerEvents: "none",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        userSelect: "none",
        maxWidth: "90%",
        height: 100,
        display: "block",
        marginInline: "auto",
        objectFit: "contain"
    }),
    isSkillsImg: style({
        transitionProperty: "translate, rotate",
        transitionDuration: ".4s",
        selectors: {
            [`${box}:hover &`]: {
                translate: "14px -4px 80px",
                rotate: ".4 1 0 10deg"
            }
        }
    }),
    noneContents: style({
        display: "flex",
        marginTop: 10,
        justifyContent: "center"
    }),
    h2: style({
        marginTop: ".3em",
        textAlign: "center"
    }),
    isSkillsH2: style({
        transitionProperty: "translate, filter, rotate",
        transitionDuration: ".4s",
        ":hover": {
            translate: "14px -4px 80px",
            rotate: ".4 1 0 10deg",
            filter: "drop-shadow(-8px 3px 10px skyBlue) drop-shadow(-20px 5px 16px skyBlue)"
        },

        "@media": {
            "(width < 870px)": {
                fontSize: "max(2.6vw, 1.12em)"
            }
        }
    }),
    descriptionBox: style({
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4
    }),
    description: style({
        marginTop: 10,
        overflowWrap: "break-word"
    })
}

export default styles
