"use client";

import { GcdsHeading } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";
import { FC } from "react";

interface HeadingProps {
    tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children?: any;
}

export const Heading: FC<HeadingProps> = ({tag = "h1", children}) => {
    return (
        <GcdsWrapper>
            <GcdsHeading tag={tag}>
                {children}
            </GcdsHeading>
        </GcdsWrapper>
    )
}