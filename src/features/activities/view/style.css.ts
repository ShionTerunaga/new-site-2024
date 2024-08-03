import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: 630,
        margin: "20px auto",
        "@media": {
            "screen and (max-width:630px)": {
                width: 202,
                display: "block",
                gap: 0
            }
        }
    }),
    mainBox: style({
        width: 630,
        display: "grid",
        gap: 12,
        gridTemplateColumns: "1fr 1fr 1fr",
        "@media": {
            "screen and (max-width:630px)": {
                width: 202,
                display: "block",
                gap: 0
            }
        }
    }),
    link: style({
        textDecoration: "none"
    }),
    item: style({
        "@media": {
            "screen and (max-width:630px)": {
                marginBottom: 10
            }
        }
    })
}

export default styles
