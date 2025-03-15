import { MDXComponents } from "mdx/types";
import React from "react";
import A from "./view/a/a";
import AlertBlock from "./view/alert-block/alert-block";
import Blockquote from "./view/blockquote/blockquote";
import Code from "./view/code/code";
import H1 from "./view/h1/h1";
import InfoBlock from "./view/info-block/infoBlock";
import Li from "./view/li/li";
import P from "./view/p/p";
import Pre from "./view/pre/pre";
import Table from "./view/table/table";
import WarningBlock from "./view/warning-block/warning-block";

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
};
