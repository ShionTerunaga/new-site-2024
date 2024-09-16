import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        height: "100vh",
        marginTop: 100
    }),
    title: style({
        textAlign: "center"
    }),
    clickList: style({
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10
    }),
    li: style({
        marginBottom: 10,
        "::marker": {
            fontSize: 24
        }
    }),
    heading2: style({
        display: "flex",
        alignItems: "center"
    }),
    icon: style({
        marginLeft: 15,
        fontSize: 28,
        display: "flex",
        alignItems: "center"
    }),
    section: style({
        width: "75%",
        borderRadius: 8,
        margin: "15px auto",
        boxShadow: "0 0 10px rgba(255,255,255,0.8)",
        backgroundColor: "white",
        padding: 50,
        color: "black",
        overflow: "auto"
    }),
    link: style({
        textDecoration: "none",
        color: "black",
        ":hover": {
            opacity: 0.5
        }
    }),
    description: style({
        marginTop: 10
    })
}

export default styles
