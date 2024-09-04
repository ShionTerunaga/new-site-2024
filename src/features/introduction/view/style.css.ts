import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        textAlign: "center"
    }),
    section: style({
        marginTop: 100
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
        "@media": {
            "screen and (min-width:849px)": {
                display: "flex",
                paddingRight: 20,
                justifyContent: "center",
                alignItems: "center",
                borderRight: "4px solid black",
                height: 210
            }
        }
    }),
    introductionContents: style({
        textAlign: "center",
        fontSize: 18,
        padding: 4,
        "@media": {
            "screen and (min-width:849px)": {
                fontSize: 20,
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                paddingLeft: 7
            }
        }
    }),
    title: style({
        fontSize: 32
    }),
    contents1: style({
        margin: 0
    }),
    itemSection: style({
        width: 200,
        display: "flex"
    }),
    box: style({
        width: 470,
        margin: "20px auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        "@media": {
            "screen and (max-width:470px)": {
                width: 150,
                display: "block",
                gap: 0,
                textAlign: "center"
            }
        }
    })
}

export default styles
