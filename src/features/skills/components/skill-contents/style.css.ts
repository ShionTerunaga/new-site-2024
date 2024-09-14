import { style } from "@vanilla-extract/css"

const styles = {
    heading2: style({
        fontSize: 29,
        margin: 0,
        marginBottom: 10
    }),
    image: style({
        textAlign: "center"
    }),
    description: style({
        marginTop: 20,
        maxHeight: 150,
        fontSize: 22,
        marginBottom: 10,
        overflow: "auto"
    })
}

export default styles
