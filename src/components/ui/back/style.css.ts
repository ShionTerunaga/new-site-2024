import { style } from "@vanilla-extract/css"

const styles = {
    link: style({
        textDecoration: "none",
        marginLeft: 10
    }),
    icon: style({
        width: 40,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40
    }),
    linkContent: style({
        width: 40,
        height: 40,
        display: "flex",
        fontSize: 30,
        color: "white",
        cursor: "pointer"
    })
}

export default styles
