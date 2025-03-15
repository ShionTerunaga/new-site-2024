import { style } from "@vanilla-extract/css";
// import button from '../introModal/style.css'

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
    }),
    img: style({
        width: "100%",
        height: "auto",
        aspectRatio: "10/11",
        objectFit: "cover"
    })
};

export default styles;
