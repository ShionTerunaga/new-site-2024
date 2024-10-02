import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100vw",
        minHeight: "100dvh",
        padding: "max(5vw, 50px) 5vw",
        display: 'grid',
        placeItems: 'center',
        placeContent: 'center',
        gap: '1em'
    }),
    iconBox: style({
        width: 100,
        height: 100,
        marginInline: "auto"
    }),
    greetingBox: style({
        width: 300,
        height: 100,
        margin: "auto",
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
        margin: "10px auto",
        display: "flex",
        width: 80,
        justifyContent: "space-between",
        alignItems: "center"
    }),
    cardContainer: style({
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        gap: "max(2vw, 1em)",
        flexWrap: "wrap"
    })
}

export default styles
