import { MDXComponents } from "mdx/types"
import React from "react"
import A from "./view/a/a"
import AlertBlock from "./view/alertBlock/alertBlock"
import Blockquote from "./view/blockquote/blockquote"
import Code from "./view/code/code"
import InfoBlock from "./view/infoBlock/infoBlock"
import P from "./view/p/p"
import Pre from "./view/pre/pre"
import Table from "./view/table/table"
import WarningBlock from "./view/warningBlock/warningBlock"
import H1 from "./view/h1/h1"
import Li from "./view/li/li"

export const markdownComponent: MDXComponents = {
    a: (props) => <A {...props} />,
    blockquote: (props) => <Blockquote {...props} />,
    code: (props) => <Code {...props} />,
    h1: (props) => <H1 {...props} />,
    li: (props) => <Li {...props} />,
    p: (props) => <P {...props} />,
    pre: (props) => <Pre {...props} />,
    table: (props) => <Table {...props} />,
    Alert: (props) => <AlertBlock {...props} />,
    Info: (props) => <InfoBlock {...props} />,
    Warning: (props) => <WarningBlock {...props} />
}
