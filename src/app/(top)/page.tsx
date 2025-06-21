"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { routingPath } from "@/utils/routing-paths";

export default function Top() {
    const { push } = useRouter();

    useEffect(() => {
        push(routingPath("en").home);
    }, [push]);

    return <></>;
}
