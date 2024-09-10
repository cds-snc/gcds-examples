"use client";

import { GcdsText } from "@cdssnc/gcds-components-react-ssr";
import { GcdsWrapper } from "@cdssnc/gcds-components-react-ssr/client";
import { FC } from "react";

interface TextProps {
    size?: "body" | "caption";
    children?: any;
}

export const Text: FC<TextProps> = ({ size = "body", children }) => {
    return (
        <GcdsWrapper>
            <GcdsText size={size}>
                {children}
            </GcdsText>
        </GcdsWrapper>
    );
};
