import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        aspectRatio: "5/7",
        padding: 0,
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        transformStyle: "preserve-3d",
        perspective: "100vmax"
    })
}

export default styles
