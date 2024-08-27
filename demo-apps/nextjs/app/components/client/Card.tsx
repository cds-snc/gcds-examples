"use client";

import { GcdsCard } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";
import { FC } from "react";

interface CardProps {
    title?: string;
    href: string;
    description?: string;
    badge?: string;
    children?: any;
}

export const Card: FC<CardProps> = ({
    title,
    href,
    description,
    badge,
    children,
}) => {
    return (
        <GcdsWrapper>
            <GcdsCard
                cardTitle={title}
                href={href}
                description={description}
                badge={badge}
            >
                {children}
            </GcdsCard>
        </GcdsWrapper>
    );
};
