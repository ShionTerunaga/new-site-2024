import { HTMLAttributes, DetailedHTMLProps } from "react"

const Pre = (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>
) => {
    return <pre {...props} />
}

export default Pre
