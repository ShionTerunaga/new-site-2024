import { style } from "@vanilla-extract/css"

const styles = {
    heading2: style({
        fontSize: 29,
        height: 50,
        display: "flex",
        alignItems: "center",
        margin: 0,
        marginTop: 20,
        marginBottom: 10
    }),
    description: style({
        marginTop: 20,
        height: 160,
        fontSize: 22
    })
}

export default styles