import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        textAlign: "center"
    }),
    section: style({
        marginTop: 100
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
