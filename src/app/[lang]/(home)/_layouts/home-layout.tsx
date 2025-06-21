"use client";

import { ReactNode } from "react";
import { useInitialState } from "@/features/whole";

interface Props {
    openingChildren: ReactNode;
    homeChildren: ReactNode;
}

export function HomeLayout({ openingChildren, homeChildren }: Props) {
    const { isFirst } = useInitialState();

    if (isFirst) {
        return <>{openingChildren}</>;
    }

    return <>{homeChildren}</>;
}
