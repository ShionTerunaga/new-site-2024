import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        height: "100vh",
        overflow: "auto"
    }),
    iconBox: style({
        width: 100,
        height: 100,
        margin: "100px auto"
    }),
    greetingBox: style({
        width: 300,
        height: 100,
        margin: "auto",
        marginTop: "-75px",
        textAlign: "center",
        "@media": {
            "screen and (max-width:300px)": {
                width: "100%"
            }
        }
    }),
    name: style({
        fontSize: 32
    }),
    descriptionBox: style({
        marginTop: 12
    }),
    icons: style({
        margin: "auto",
        marginTop: 10,
        marginBottom: 10,
        display: "flex",
        width: 80,
        height: 22,
        justifyContent: "space-between",
        alignItems: "center"
    }),
    cardContainer: style({
        display: "block",
        marginTop: 20,
        "@media": {
            "screen and (min-width:500px)": {
                width: 500,
                margin: "15px auto",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto"
            }
        }
    })
}

export default styles
