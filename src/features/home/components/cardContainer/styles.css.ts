import { style } from "@vanilla-extract/css"

const styles = {
    itemBox: style({
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        marginBottom: 10
    }),
    link: style({
        textDecoration: "none",
        marginBottom: 12
    })
}

export default styles
