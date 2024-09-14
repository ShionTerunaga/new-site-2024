import { Plugin } from "unified"
import { visit } from "unist-util-visit"
import { getValidChildren } from "./getValidChildren"
import { insertElement } from "./insertElement"

export const remarkUIComponent: Plugin = () => (tree) => {
    let cache: any[] = []

    visit(tree, "paragraph", (node: any) => {
        let nodeChildren: any[] = []

        if (node.children[0].type === "text") {
            const [firstContents] =
                node.children[0].value.match(/^:::(\w+)\s+([\s\S]*?)$/) ?? []

            const [firstStatusOnly] =
                node.children[0].value.match(/^:::(\w+)/) ?? []

            const [lastContent] =
                node.children[0].value.match(/([\s\S]*?)\s*:::$/) ?? []

            const [lastStatusOnly] = node.children[0].value.match(/:::$/) ?? []

            if (lastContent || lastStatusOnly) {
                cache = [...cache, node.children[0]]

                nodeChildren = cache

                cache = []
            } else if (firstContents || firstStatusOnly || cache.length !== 0) {
                node.children[0].value = node.children[0].value + "\n"

                cache = [...cache, node.children[0]]

                node.children = []
            } else {
                nodeChildren = node.children
            }
        }

        try {
            const { name, children } = getValidChildren(nodeChildren)

            switch (name) {
                case "info":
                    insertElement({ name: "Info", children })(node)
                    break
                case "alert":
                    insertElement({ name: "Alert", children })(node)
                    break
                case "warning":
                    insertElement({ name: "Warning", children })(node)
                    break
                default:
                    break
            }
        } catch {}
    })
}
