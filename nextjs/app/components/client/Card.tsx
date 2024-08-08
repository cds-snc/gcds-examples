"use client";

import { GcdsCard } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";
import { FC } from "react";

interface CardProps {
    title?: string;
    href: string
    description?: string;
    tag?: string;
    children?: any;
}

export const Card: FC<CardProps> = ({title, href, description, tag, children}) => {
    return (
        <GcdsWrapper>
            <GcdsCard
                cardTitle={title}
                href={href}
                description={description}
                tag={tag}
            >
                {children}
            </GcdsCard>
        </GcdsWrapper>
    )
}