type params = {
    name: string
    children: any[]
}

export const insertElement = (params: params) => {
    const { name, children = [] } = params

    return (node: any) => {
        node.type = "mdxJsxFlowElement"
        node.name = name
        node.children = children
    }
}
