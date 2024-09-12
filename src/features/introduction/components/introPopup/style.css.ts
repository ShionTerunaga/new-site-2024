import { style } from "@vanilla-extract/css"

const styles = {
    heading2: style({
        fontSize: 29,
        margin: 0,
        marginBottom: 10
    }),
    description: style({
        marginTop: 20,
        maxHeight: 300,
        fontSize: 22,
        marginBottom: 10,
        overflow: "auto"
    }),
    contents: style({
        margin: 0,
        marginBottom: 10
    })
}

export default styles
