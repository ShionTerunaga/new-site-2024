import { style } from "@vanilla-extract/css";

const styles = {
    container: style({
        width: "100vw",
        minHeight: "100dvh",
        padding: "max(5vw, 50px) 5vw",
        display: "grid",
        alignItems: "center",
        alignContent: "center"
    }),
    title: style({
        textAlign: "center",
        paddingTop: 20
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
        borderRadius: 8,
        margin: "15px auto",
        backgroundColor: "#333",
        padding: 50,
        color: "#fff",
        overflow: "auto"
    }),
    link: style({
        textDecoration: "none",
        color: "#fff",
        ":hover": {
            opacity: 0.5
        }
    }),
    description: style({
        marginTop: 10
    })
};

export default styles;
