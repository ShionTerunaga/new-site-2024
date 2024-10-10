import { style } from "@vanilla-extract/css"

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
    isSkills: style({
        display: "grid",
        placeItems: "center",
        placeContent: "center",
    }),
    image: style({
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
