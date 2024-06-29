import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        textAlign: "center"
    }),
    title: style({
        fontSize: 24
    }),
    itemSection: style({
        width: 200,
        display: "flex"
    })
}

export default styles
