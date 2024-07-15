import { style } from "@vanilla-extract/css"

const styles = {
    link: style({
        textDecoration: "none",
        marginLeft: 10
    }),
    icon: style({
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 30
    }),
    linkContent: style({
        width: 75,
        height: 30,
        display: "flex",
        fontSize: 23,
        color: "white",
        ":hover": {
            color: "yellow",
            transition: "0.6s"
        }
    })
}

export default styles
