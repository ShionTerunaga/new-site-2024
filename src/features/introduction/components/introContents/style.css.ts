import { style } from "@vanilla-extract/css"

const styles = {
    section: style({
        marginTop: 20
    }),
    intro: style({
        width: "75%",
        borderRadius: 8,
        margin: "auto",
        boxShadow: "0 0 10px rgba(255,255,255,0.8)",
        backgroundColor: "white",
        padding: 25,
        color: "black",
        "@media": {
            "screen and (max-width:430px)": {
                paddingLeft: 0,
                paddingRight: 0
            },
            "screen and (min-width:849px)": {
                width: "50%",
                height: 250,
                display: "flex"
            }
        }
    }),
    titleBox: style({
        fontSize: 18,
        paddingBottom: 15,
        borderBottom: "2px solid silver",
        "@media": {
            "screen and (min-width:849px)": {
                display: "flex",
                paddingRight: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRight: "4px solid black",
                height: 210,
                borderBottom: "none"
            }
        }
    }),
    introductionContents: style({
        textAlign: "center",
        fontSize: 18,
        padding: 4,
        marginTop: 10,
        "@media": {
            "screen and (min-width:855px)": {
                fontSize: 20,
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                paddingLeft: 7,
                marginTop: 0
            }
        }
    })
}

export default styles
