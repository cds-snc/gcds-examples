"use client";

import { GcdsGrid } from "@cdssnc/gcds-components-react-ssr";
import { FC } from "react";

interface GridProps {
    tag?: "article" | "aside" | "div" | "dl" | "main" | "nav" | "ol" | "section" | "ul";
    columns: string;
    columnsTablet: string;
    columnsDesktop: string;
    children?: any;
}

export const Grid: FC<GridProps> = ({tag = "div", columns, columnsTablet, columnsDesktop, children}) => {
    return (
        <GcdsGrid
            tag={tag}
            columns={columns}
            columnsTablet={columnsTablet}
            columnsDesktop={columnsDesktop}
        >
            {children}
        </GcdsGrid>
    )
}