export const getValidChildren = (children: any[]) => {
    if (children.length === 1) {
        const { type, value } = children[0];

        const [, name, content] =
            value.match(/^:::(\w+)\s+([\s\S]*?)\s*:::$/) ?? [];

        if (!name || !content) throw new Error("");

        return {
            name,
            children: [{ type: "text", value: content }]
        };
    } else {
        const firstChild = children[0];

        const [, name, firstChildContent] =
            firstChild.value.match(/^:::(\w+)\s+([\s\S]*?)$/) ?? [];

        const [firstStatusOnly] = firstChild.value.match(/^:::(\w+)/) ?? [];

        if (firstChildContent) {
            children[0].value = firstChildContent;
        } else if (firstStatusOnly) {
            children.shift();
        } else {
            children = [];

            return {
                name,
                children
            };
        }

        children.forEach((child) => {
            const [, lastChildContent] =
                child.value.match(/([\s\S]*?)\s*:::$/) ?? [];

            const [lastStatusOnly] = child.value.match(/:::$/) ?? [];

            if (lastChildContent) {
                children[children.length - 1].value = lastChildContent;
            } else if (lastStatusOnly) {
                children.pop();
            }
        });

        return {
            name,
            children
        };
    }
};
