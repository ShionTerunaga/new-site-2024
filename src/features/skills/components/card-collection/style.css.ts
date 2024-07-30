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
    heading2: style({
        margin: 10,
        marginLeft: 0,
        width: 630
    }),
    mainBox: style({
        width: 630,
        display: "grid",
        gap: 12,
        gridTemplateColumns: "1fr 1fr 1fr"
    })
}

export default styles
