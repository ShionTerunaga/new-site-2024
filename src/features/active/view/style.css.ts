import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        padding: "max(5vw, 50px) 8vw",
        "@media": {
            "(width < 830px)": {
                width: "90%"
            }
        }
    }),
    heading: style({
        marginTop: 10,
        textAlign: "center",
        fontSize: 32
    }),
    mainBox: style({
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        "::-webkit-scrollbar": {
            display: "none"
        }
    }),
    contents: style({
        width: "100%",
        borderRadius: 8,
        margin: "15px auto",
        backgroundColor: "#333",
        padding: 20,
        color: "white"
    }),
    contentsBody: style({
        width: 590,
        margin: "auto",
        "@media": {
            "screen and (max-width:630px)": {
                width: 260,
                margin: "auto"
            }
        }
    })
}

export default styles
