import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        marginTop: "max(5vw, 50px)"
    }),
    heading1: style({
        textAlign: "center",
        fontSize: 32
    }),
    clickMessage: style({
        textAlign: "center",
        fontSize: 18,
        marginTop: 10,
    }),
    mainBox: style({
        display: "grid",
        gap: "max(3vw, 1em)",
        width: "min(90%, 800px)",
        marginInline: 'auto',
        gridTemplateColumns: "repeat(auto-fill, max(26%, 160px))",
        justifyContent: 'center',
        marginTop: 'max(3vw, 30px)'
    }),
    link: style({
        textDecoration: "none"
    }),
    box: style({
        alignItems: "center"
    })
}

export default styles
